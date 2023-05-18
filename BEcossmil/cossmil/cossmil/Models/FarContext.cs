using Microsoft.EntityFrameworkCore;

namespace cossmil.Models
{
    public class FarContext : DbContext
    {
        public FarContext(DbContextOptions<FarContext> options) : base(options)
        {



        }
        public DbSet<FarmT> FarmaciaTab { get; set; }
        public DbSet<Pcirugia> ProgracionCirugia { get; set; }

        public DbSet<Medicamentoesenciales> Mesenciales { get; set; } //<clase> Nombre de la tabla
        public DbSet<PPacientesT> Pacientes { get; set; } //<clase> Nombre de la tabla

        public DbSet<Precetas> Recetas { get; set; } //<clase> Nombre de la tabla

        public DbSet<contabilidad_cajachica> Cajachica { get; set; } //<clase> Nombre de la tabla

        public DbSet<aperturacajachica> AperturaCajachica { get; set; } //<clase> Nombre de la tabla
    }
}