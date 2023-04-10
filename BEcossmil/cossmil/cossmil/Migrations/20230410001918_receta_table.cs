using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cossmil.Migrations
{
    public partial class receta_table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Recetas",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    pieza = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    doctor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    fechai = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    horai = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    fechaf = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    recordatorio = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    receta = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    lapso = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Recetas", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Recetas");
        }
    }
}
