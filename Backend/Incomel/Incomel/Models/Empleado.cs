using System.Runtime.InteropServices;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Incomel.Models
{
    public class Empleado
    {
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }    //INT NOT NULL AUTO_INCREMENT,

        [Required]
        [StringLength(15)]
		public string Dpi { get; set; } // VARCHAR(15) NOT NULL UNIQUE,

        [Required]
        [StringLength(150)]
        public string Nombre_completo { get; set; }  // VARCHAR(150) NOT NULL,

        [Required]
        public short Cantidad_de_hijos { get; set; }//TINYINT UNSIGNED NOT NULL,

        [Required]
        public float Salario_base { get; set;}//FLOAT NOT NULL,

        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public float Bono_decreto { get; set; } //FLOAT NOT NULL DEFAULT 250.00,

        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public bool Deleted { get; set; } //boolean NOT NULL DEFAULT false

        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime Fecha_creacion { get; set; }//DATETIME NOT NULL DEFAULT NOW(),

        [Required]
        public int USUARIO_id { get; set; } //INT NOT NULL,
    }
}
