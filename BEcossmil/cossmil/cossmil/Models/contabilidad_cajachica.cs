namespace cossmil.Models
{
    public class contabilidad_cajachica
    {
        public int id { get; set; }
        public string montoinicial { get; set; }
        public string transacciones { get; set; }

        public string responsable { get; set; }

        public string aprobaciones { get; set; }

        public string fechaf { get; set; }

        public string fechai { get; set; }

        public string totalcompras { get; set; }

        public string totalfac { get; set; }

        public string totalrecibos { get; set; }

        public string otros { get; set; }

        public string comentario { get; set; }

                public DateTime FechaCreacion { get; set; }

    }
}
