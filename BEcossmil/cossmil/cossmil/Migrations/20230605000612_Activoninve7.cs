using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cossmil.Migrations
{
    public partial class Activoninve7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UltimoNumeroAutoincremental",
                table: "Activocuenta");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UltimoNumeroAutoincremental",
                table: "Activocuenta",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
