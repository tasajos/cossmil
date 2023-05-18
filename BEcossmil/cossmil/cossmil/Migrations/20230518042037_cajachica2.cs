using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cossmil.Migrations
{
    public partial class cajachica2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "fechai",
                table: "Cajachica",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "otros",
                table: "Cajachica",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "totalcompras",
                table: "Cajachica",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "totalfac",
                table: "Cajachica",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "totalrecibos",
                table: "Cajachica",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "fechai",
                table: "Cajachica");

            migrationBuilder.DropColumn(
                name: "otros",
                table: "Cajachica");

            migrationBuilder.DropColumn(
                name: "totalcompras",
                table: "Cajachica");

            migrationBuilder.DropColumn(
                name: "totalfac",
                table: "Cajachica");

            migrationBuilder.DropColumn(
                name: "totalrecibos",
                table: "Cajachica");
        }
    }
}
