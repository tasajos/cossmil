﻿namespace cossmil.Models
{
    public class registrocajachica
    {
        public int id { get; set; }
        public long? monto { get; set; }
        public string transacciones { get; set; }

        public string aprobaciones { get; set; }


        public string fechai { get; set; }

        public string comentario { get; set; }

        public string nrorecibo { get; set; }

        public string entregado { get; set; }

        public DateTime FechaCreacion { get; set; }

    }
}
