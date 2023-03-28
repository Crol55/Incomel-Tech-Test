using System.ComponentModel.DataAnnotations;
using Incomel.Data;
using Incomel.Models;
using Incomel.Models.DTO;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MimeKit.Text;
using static System.Net.WebRequestMethods;

namespace Incomel.Controllers
{
    [ApiController]
    [Route("api/usuarios")]
    public class UsuarioController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public UsuarioController(ApplicationDbContext db) {
            _db = db;
        }


        [HttpGet]
        [Route("existeUsuario")]
        [ProducesResponseType(StatusCodes.Status200OK), ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<object> buscarUsuario([FromQuery] string email, [FromQuery] string password) {

            Usuario usuario = _db.USUARIO.ToList().FirstOrDefault(user => user.Email == email && user.Password == password);
            if (usuario == null) {

                return NotFound(new { existe = false });
            }

            return Ok(new { existe = true });
        }

        [HttpPost]
        [Route("resetPassword")]
        [ProducesResponseType(StatusCodes.Status200OK), ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<object> resetPassword([FromBody] ResetPwdBody resetPwdBody)
        {
            var splitDate = resetPwdBody.Fecha_nacimiento.Split('-');

            var fecha = new DateOnly(Convert.ToInt16(splitDate[0]), Convert.ToInt16(splitDate[1]), Convert.ToInt16(splitDate[2]));

            Usuario usuario = _db.USUARIO.ToList().FirstOrDefault(user => user.Email == resetPwdBody.Email && user.Fecha_nacimiento == fecha);
            if (usuario == null)
            {
                return NotFound(new { existe = false });
            }

            var resetCode = Guid.NewGuid().ToString();
            usuario.Reset_password_code = resetCode;
            _db.SaveChanges();
            // Send email 
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse("cortez.russel@ethereal.email"));
            email.To.Add(MailboxAddress.Parse(resetPwdBody.Email));
            email.Subject = "Email recovery";
            email.Body = new TextPart(TextFormat.Html) { Text = 
                String.Format("<h1> Para recuperar su contrasenia ingrese al siguiente enlace:" +
                "<a href=\"http://localhost:4200/usuario/recovery/confirmPassword/{0}/{1}\" target=\"_blank\">Reset Password</a> </h1>"
                , resetPwdBody.Email, resetCode
                )                                
            };
            using var smtp = new SmtpClient();
            smtp.Connect("smtp.ethereal.email", 587, SecureSocketOptions.StartTls);
            smtp.Authenticate("cortez.russel@ethereal.email", "KhmRD99uKQc3x4KPXt");
            smtp.Send(email);
            smtp.Disconnect(true);

            return Ok(new { existe = true });
        }

        [HttpPut]
        [Route("confirmNewPassword")]
        [ProducesResponseType(StatusCodes.Status200OK), ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<object> changePassword([FromBody] NewPwdBody newPwdBody)
        {
            
            Usuario usuario = _db.USUARIO.ToList().FirstOrDefault(
                user => user.Email == newPwdBody.Email && user.Reset_password_code == newPwdBody.Reset_password_code
            );

            if (usuario == null)
            {
                return NotFound(new { valid = false });
            }
        
            usuario.Reset_password_code = null;
            usuario.Password = newPwdBody.Password;
            
            _db.SaveChanges();

            return Ok(new { valid = true });
        }
    }
}
