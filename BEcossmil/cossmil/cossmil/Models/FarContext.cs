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

        public DbSet<Medicamentoesenciales> Mesenciales { get; set; }
    }
}