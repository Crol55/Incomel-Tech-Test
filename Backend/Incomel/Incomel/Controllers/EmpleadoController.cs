using System.Xml.Linq;
using AutoMapper;
using Incomel.Data;
using Incomel.Models;
using Incomel.Models.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;
using MySqlConnector;

namespace Incomel.Controllers
{
    [ApiController]
    [Route("api/empleados")]
    public class EmpleadoController: ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private readonly IMapper _mapper;
        public EmpleadoController(ApplicationDbContext db, IMapper mapper) { 
            
            _db = db;
            _mapper = mapper;
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult <EmpleadoDTO> createEmpleado( [FromBody] EmpleadoDTO empleadoDto)
        {   
            Empleado empleado = _mapper.Map<Empleado>(empleadoDto);

            _db.EMPLEADO.Add(empleado);
            _db.SaveChanges();

            return Ok(empleadoDto);
        }


        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult <List<EmpleadoDTO>> readEmpleados() {

            var listaEmpleados = _db.EMPLEADO.Where(empleado => empleado.Deleted == false).ToList();

            var listaEmpleadosDto = listaEmpleados.Select(empleado => _mapper.Map<EmpleadoDTO>(empleado));

            return Ok(listaEmpleadosDto);
        }


        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<EmpleadoDTO> updateEmpleado([FromBody] EmpleadoDTO empleadoDto)
        {
            //Empleado empleado = _mapper.Map<Empleado>(empleadoDto);

            Empleado empleadoForUpdate = _db.EMPLEADO.SingleOrDefault<Empleado>( e => e.Dpi == empleadoDto.Dpi);

            if (empleadoForUpdate != null) {
                empleadoForUpdate.Nombre_completo = empleadoDto.Nombre_completo;
                empleadoForUpdate.Cantidad_de_hijos = empleadoDto.Cantidad_de_hijos;
                empleadoForUpdate.Salario_base = empleadoDto.Salario_base;
                empleadoForUpdate.Deleted = empleadoDto.Deleted;
                _db.SaveChanges();
            }
            
            return empleadoDto;
        }


        [HttpDelete]
        public ActionResult< object> deleteEmpleado([FromQuery] string dpi)
        {

            var dpiParam = new MySqlParameter("@dpi", dpi);
            _db.Database.ExecuteSqlRaw("CALL DeleteEmpleado(@dpi)",  new object[] { dpiParam});

            return Ok(new { deleted = true });
            
        }

    }
}
