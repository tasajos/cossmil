namespace cossmil.Models
{
    public class Medicamentoesenciales
    {

        public int id { get; set; }
        public string codigo { get; set; }
        public string descripcion { get; set; }
        public string forma { get; set; }

        public string concentracion { get; set; }

        public DateTime FechaCreacion { get; set; }
    }
}
