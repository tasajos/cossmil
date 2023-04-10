namespace cossmil.Models
{
    public class Precetas
    {
        public int id { get; set; }
        public string pieza { get; set; }
        public string doctor { get; set; }

        public string fechai { get; set; }

        public string horai { get; set; }

        public string fechaf { get; set; }

        public string recordatorio { get; set; }

        public string receta { get; set; }

        public string lapso { get; set; }

        public DateTime FechaCreacion { get; set; }
    }
}
