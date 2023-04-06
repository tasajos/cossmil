using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cossmil.Migrations
{
    public partial class TableFarmt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "apellido",
                table: "FarmaciaTab");

            migrationBuilder.DropColumn(
                name: "cantidad",
                table: "FarmaciaTab");

            migrationBuilder.DropColumn(
                name: "precio",
                table: "FarmaciaTab");

            migrationBuilder.RenameColumn(
                name: "ubicacion",
                table: "FarmaciaTab",
                newName: "unidad");

            migrationBuilder.RenameColumn(
                name: "tipo",
                table: "FarmaciaTab",
                newName: "observaciones");

            migrationBuilder.RenameColumn(
                name: "telefono",
                table: "FarmaciaTab",
                newName: "fechav");

            migrationBuilder.RenameColumn(
                name: "pedido",
                table: "FarmaciaTab",
                newName: "descripcion");

            migrationBuilder.RenameColumn(
                name: "nombre",
                table: "FarmaciaTab",
                newName: "codigovademecum");

            migrationBuilder.RenameColumn(
                name: "detalle",
                table: "FarmaciaTab",
                newName: "codigosiga");

            migrationBuilder.RenameColumn(
                name: "color",
                table: "FarmaciaTab",
                newName: "cantidadpedida");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "unidad",
                table: "FarmaciaTab",
                newName: "ubicacion");

            migrationBuilder.RenameColumn(
                name: "observaciones",
                table: "FarmaciaTab",
                newName: "tipo");

            migrationBuilder.RenameColumn(
                name: "fechav",
                table: "FarmaciaTab",
                newName: "telefono");

            migrationBuilder.RenameColumn(
                name: "descripcion",
                table: "FarmaciaTab",
                newName: "pedido");

            migrationBuilder.RenameColumn(
                name: "codigovademecum",
                table: "FarmaciaTab",
                newName: "nombre");

            migrationBuilder.RenameColumn(
                name: "codigosiga",
                table: "FarmaciaTab",
                newName: "detalle");

            migrationBuilder.RenameColumn(
                name: "cantidadpedida",
                table: "FarmaciaTab",
                newName: "color");

            migrationBuilder.AddColumn<string>(
                name: "apellido",
                table: "FarmaciaTab",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "cantidad",
                table: "FarmaciaTab",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "precio",
                table: "FarmaciaTab",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
