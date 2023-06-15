using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cossmil.Migrations
{
    public partial class patrimonio2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Patrimonion2",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nivel = table.Column<int>(type: "int", nullable: false),
                    nombrecuenta = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cuentamayor = table.Column<int>(type: "int", nullable: false),
                    numero = table.Column<int>(type: "int", nullable: false),
                    totalnum = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false),
                    activonivel = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patrimonion2", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Patrimonion3",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nivel = table.Column<int>(type: "int", nullable: false),
                    nombrecuenta = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cuentamayor = table.Column<int>(type: "int", nullable: false),
                    numero = table.Column<int>(type: "int", nullable: false),
                    totalnum = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false),
                    totalnivel = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patrimonion3", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Patrimonion4",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nivel = table.Column<int>(type: "int", nullable: false),
                    nombrecuenta = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cuentamayor = table.Column<int>(type: "int", nullable: false),
                    numero = table.Column<int>(type: "int", nullable: false),
                    totalnum = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false),
                    totalnivel = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patrimonion4", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Patrimonion5",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nivel = table.Column<int>(type: "int", nullable: false),
                    nombrecuenta = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cuentamayor = table.Column<int>(type: "int", nullable: false),
                    numero = table.Column<int>(type: "int", nullable: false),
                    totalnum = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false),
                    totalnivel = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patrimonion5", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Patrimonion6",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nivel = table.Column<int>(type: "int", nullable: false),
                    nombrecuenta = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cuentamayor = table.Column<int>(type: "int", nullable: false),
                    numero = table.Column<int>(type: "int", nullable: false),
                    totalnum = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false),
                    totalnivel = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patrimonion6", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Patrimonion2");

            migrationBuilder.DropTable(
                name: "Patrimonion3");

            migrationBuilder.DropTable(
                name: "Patrimonion4");

            migrationBuilder.DropTable(
                name: "Patrimonion5");

            migrationBuilder.DropTable(
                name: "Patrimonion6");
        }
    }
}
