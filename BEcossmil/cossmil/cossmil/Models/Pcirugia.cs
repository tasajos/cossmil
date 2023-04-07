namespace cossmil.Models
{
    public class Pcirugia
    {

        public int id { get; set; }
        public string paciente { get; set; }
        public string grado { get; set; }
        public string unidad { get; set; }

        public string tipointer { get; set; }
        public string fechap { get; set; }
        public string fecham { get; set; }
        public string fechaa { get; set; }

        public string tiposangre { get; set; }

        public string observaciones { get; set; }
        public string hora { get; set; }
        public string minuto { get; set; }

        public DateTime FechaCreacion { get; set; }
    }
}
