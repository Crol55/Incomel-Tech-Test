using System.ComponentModel.DataAnnotations;
using Incomel.Data;
using Incomel.Models;
using Incomel.Models.DTO;
using Microsoft.AspNetCore.Mvc;

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
            // Send email 
            _db.SaveChanges();

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
