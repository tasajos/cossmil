namespace cossmil.Models
{
    public class FarmT
    {
        public int id { get; set; }
        public string codigosiga { get; set; }
        public string codigovademecum { get; set; }
        public string unidad { get; set; }

        public string descripcion { get; set; }
        public string fechav { get; set; }
        public int cantidadpedida { get; set; }

        public string observaciones { get; set; }
       
        public DateTime FechaCreacion { get; set; }
    }
}
