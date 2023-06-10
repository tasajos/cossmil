using cossmil.Models.Pcuenta.Pasivo;
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

        public DbSet<registrocajachica> RegCajachica { get; set; } //<clase> Nombre de la tabla


       public DbSet<resumeCajachica> ResumeCChica { get; set; } //<clase> Nombre de la tabla


        public DbSet<Resultadocajachica> ResTCChica { get; set; } //<clase> Nombre de la tabla

        public DbSet<Recibos> Recibosdb { get; set; } //<clase> Nombre de la tabla

        public DbSet<CierreCajaChica> CierreCChica { get; set; } //<clase> Nombre de la tabla

        public DbSet<tiposcuentas> TiposCuentasCont { get; set; } //<clase> Nombre de la tabla n1


        public DbSet<activoclase> Activocuenta { get; set; } //<clase> Nombre de la tabla n2

        public DbSet<activoclasen3> Activocuenta3 { get; set; } //<clase> Nombre de la tabla

        public DbSet<activoclasen4> Activocuenta4 { get; set; } //<clase> Nombre de la tabla

        public DbSet<activoclasen5> Activocuenta5 { get; set; } //<clase> Nombre de la tabla

        public DbSet<activoclasen6> Activocuenta6 { get; set; } //<clase> Nombre de la tabla

        public DbSet<pasivoclasen2> Pasivocuentan2 { get; set; } //<clase> Nombre de la tabla

        public DbSet<pasivoclasen3> Pasivocuentan3 { get; set; } //<clase> Nombre de la tabla

        public DbSet<pasivoclasen4> Pasivocuentan4 { get; set; } //<clase> Nombre de la tabla

        public DbSet<pasivoclasen5> Pasivocuentan5 { get; set; } //<clase> Nombre de la tabla

        public DbSet<pasivoclasen6> Pasivocuentan6 { get; set; } //<clase> Nombre de la tabla


    }
}