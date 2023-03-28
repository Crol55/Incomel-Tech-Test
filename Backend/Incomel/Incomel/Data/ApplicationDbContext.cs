using Incomel.Models;
using Microsoft.EntityFrameworkCore;

namespace Incomel.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options) { 
        }
        public DbSet<Usuario> USUARIO { get; set; }

        public DbSet<Empleado> EMPLEADO { get; set; }
    }
}
