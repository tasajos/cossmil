using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cossmil.Migrations
{
    public partial class Pcirugia2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProgracionCirugia",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    paciente = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    grado = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    unidad = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    tipointer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    fechap = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    tiposangre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    observaciones = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProgracionCirugia", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProgracionCirugia");
        }
    }
}
