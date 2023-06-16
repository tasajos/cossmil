using cossmil.Models.Pcuenta.Cuenta_Distribucion;
using cossmil.Models.Pcuenta.Cuenta_Productos;
using cossmil.Models.Pcuenta.Pasivo;
using cossmil.Models.Pcuenta.Patrimonio;
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

        //Activo

        public DbSet<activoclase> Activocuenta { get; set; } //<clase> Nombre de la tabla n2

        public DbSet<activoclasen3> Activocuenta3 { get; set; } //<clase> Nombre de la tabla

        public DbSet<activoclasen4> Activocuenta4 { get; set; } //<clase> Nombre de la tabla

        public DbSet<activoclasen5> Activocuenta5 { get; set; } //<clase> Nombre de la tabla

        public DbSet<activoclasen6> Activocuenta6 { get; set; } //<clase> Nombre de la tabla



        //Pasivo

        public DbSet<pasivoclasen2> Pasivocuentan2 { get; set; } //<clase> Nombre de la tabla

        public DbSet<pasivoclasen3> Pasivocuentan3 { get; set; } //<clase> Nombre de la tabla

        public DbSet<pasivoclasen4> Pasivocuentan4 { get; set; } //<clase> Nombre de la tabla

        public DbSet<pasivoclasen5> Pasivocuentan5 { get; set; } //<clase> Nombre de la tabla

        public DbSet<pasivoclasen6> Pasivocuentan6 { get; set; } //<clase> Nombre de la tabla


        //Patrimonio

        public DbSet<patrimonioclasen2> Patrimonion2 { get; set; } //<clase> Nombre de la tabla
        public DbSet<patrimonioclasen3> Patrimonion3 { get; set; } //<clase> Nombre de la tabla
        public DbSet<patrimonioclasen4> Patrimonion4 { get; set; } //<clase> Nombre de la tabla

        public DbSet<patrimonioclasen5> Patrimonion5 { get; set; } //<clase> Nombre de la tabla
        public DbSet<patrimonioclasen6> Patrimonion6 { get; set; } //<clase> Nombre de la tabla

        
        //Cuentas de Distribucion


        public DbSet<cuentadist2> CuentaDistribucion2 { get; set; } //<clase> Nombre de la tabla
        public DbSet<cuentadist3> CuentaDistribucion3 { get; set; } //<clase> Nombre de la tabla

        public DbSet<cuentadist4> CuentaDistribucion4 { get; set; } //<clase> Nombre de la tabla

        public DbSet<cuentadist5> CuentaDistribucion5 { get; set; } //<clase> Nombre de la tabla

        public DbSet<cuentadist6> CuentaDistribucion6 { get; set; } //<clase> Nombre de la tabla

        //Cuentas de Productos

        public DbSet<cuentaproducto2> CuentaProducto2 { get; set; } //<clase> Nombre de la tabla
        public DbSet<cuentaproducto3> CuentaProducto3 { get; set; } //<clase> Nombre de la tabla

        public DbSet<cuentaproducto4> CuentaProducto4 { get; set; } //<clase> Nombre de la tabla

        public DbSet<cuentaproducto5> CuentaProducto5 { get; set; } //<clase> Nombre de la tabla

        public DbSet<cuentaproducto6> CuentaProducto6 { get; set; } //<clase> Nombre de la tabla



    }
}