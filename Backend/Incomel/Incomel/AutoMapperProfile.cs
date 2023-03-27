using AutoMapper;
using Incomel.Models;
using Incomel.Models.DTO;

namespace Incomel
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile() {

            CreateMap<Empleado, EmpleadoDTO>();
            CreateMap<EmpleadoDTO, Empleado>();
        }
    }
}
