namespace cossmil.Models.Pcuenta.Patrimonio
{
    public class patrimonioclasen4
    {
        public int id { get; set; }
        public int nivel { get; set; }
        public string nombrecuenta { get; set; }
        public int cuentamayor { get; set; }
        public int numero { get; set; }

        public string totalnum { get; set; }

        public DateTime FechaCreacion { get; set; }

        public string totalnivel
        {
            get { return $"{totalnum}.{numero}"; }
            set { }
        }
    }
}
