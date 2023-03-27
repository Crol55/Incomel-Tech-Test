namespace Incomel.Models.DTO
{
    public class EmpleadoDTO
    {
        public string Dpi { get; set; }
        public string Nombre_completo { get; set; }
        public short Cantidad_de_hijos { get; set; }
        public float Salario_base { get; set; } 
        public float Bono_decreto { get; set; }
        public bool Deleted { get; set; }
        public int USUARIO_id { get; set; }
    }
}
