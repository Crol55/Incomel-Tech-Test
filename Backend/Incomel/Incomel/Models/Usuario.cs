using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Incomel.Models
{
    public class Usuario
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set;}
        [Required]
        [StringLength(50)]
        public string Nombre { get; set; }//varchar(50) NOT NULL,
        [Required]
        [StringLength(100)]
        public string Email { get; set; } //varchar(100) NOT NULL UNIQUE,
        [Required]
        public DateOnly Fecha_nacimiento { get; set; } //DATE NOT NULL,
        [Required]
        [StringLength(50)]
        public string Password { get; set; }//varchar(50) NOT NULL,

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime Fecha_creacion { get; set; }//DATETIME NOT NULL DEFAULT NOW(),

        [StringLength(100)]
        public string? Reset_password_code { get; set; } //varchar(100)  DEFAULT null,
    }
}
