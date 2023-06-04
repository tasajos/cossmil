namespace cossmil.Models
{
    public class activoclase
    {
        private static int _nextNumero = 1;

        public int id { get; set; }
        public int nivel { get; set; }
        public string nombrecuenta { get; set; }
        public int cuentamayor { get; set; }
        public int numero { get; set; }

        public string totalnum
        {
            get { return cuentamayor.ToString() + '.' +numero.ToString(); }
            set { }
        }

        public DateTime FechaCreacion { get; set; }

        public activoclase()
        {
            numero = _nextNumero;
            _nextNumero++;
        }
    }
}