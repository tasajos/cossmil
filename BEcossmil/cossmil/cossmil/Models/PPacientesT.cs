namespace cossmil.Models
{
    public class PPacientesT
    {
        public int id { get; set; }
        public string pieza { get; set; }
        public string nombrepaciente { get; set; }
        public string doctor { get; set; }

        public string cuidado { get; set; }
        public string estado { get; set; }
        public string fecha { get; set; }
        
        public DateTime FechaCreacion { get; set; }
    }
}
