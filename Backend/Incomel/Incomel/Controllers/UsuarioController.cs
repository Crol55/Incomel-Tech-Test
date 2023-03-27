using System.ComponentModel.DataAnnotations;
using Incomel.Data;
using Incomel.Models;
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

            return Ok( new { existe = true } );
        }
    }
}
