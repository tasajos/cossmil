using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cossmil.Migrations
{
    public partial class act115 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "activoniveln2",
                table: "Activocuenta");

            migrationBuilder.DropColumn(
                name: "actmayor",
                table: "Activocuenta");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "activoniveln2",
                table: "Activocuenta",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "actmayor",
                table: "Activocuenta",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
