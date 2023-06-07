namespace cossmil.Models
{
    public class activoclase
    {

        public int id { get; set; }
        public int nivel { get; set; }
        public string nombrecuenta { get; set; }
        public int cuentamayor { get; set; }
        public int numero { get; set; }


        //public int totalnum { get; set; }

        public string totalnum
        {
            get { return cuentamayor.ToString() + '.' + numero.ToString(); }
            set { }
        }


        public DateTime FechaCreacion { get; set; }

        public string activonivel
        {
            get { return totalnum.ToString() + ' ' + nombrecuenta.ToString(); }
            set { }


        }

    }
}