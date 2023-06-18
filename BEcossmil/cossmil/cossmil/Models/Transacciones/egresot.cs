namespace cossmil.Models.Transacciones
{
    public class egresot
    {
        public int id { get; set; }
        public string fechat { get; set; }

        public int numero { get; set; }
        public string concepto { get; set; }
        public int cantidad { get; set; }
        public string moneda { get; set; }


        public DateTime FechaCreacion { get; set; }

    }
}
