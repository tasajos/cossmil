﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using cossmil.Models;

#nullable disable

namespace cossmil.Migrations
{
    [DbContext(typeof(FarContext))]
    [Migration("20230606202804_activoclasen12")]
    partial class activoclasen12
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.15")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("cossmil.Models.activoclase", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<string>("activonivel")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("activoniveln2")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("actmayor")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("cuentamayor")
                        .HasColumnType("int");

                    b.Property<int>("nivel")
                        .HasColumnType("int");

                    b.Property<string>("nombrecuenta")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("numero")
                        .HasColumnType("int");

                    b.Property<string>("totalnum")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Activocuenta");
                });

            modelBuilder.Entity("cossmil.Models.aperturacajachica", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<string>("aprobaciones")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("comentario")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fechai")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("montoinicial")
                        .HasColumnType("int");

                    b.Property<string>("transacciones")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("AperturaCajachica");
                });

            modelBuilder.Entity("cossmil.Models.CierreCajaChica", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<int>("monto")
                        .HasColumnType("int");

                    b.Property<string>("responsable")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("CierreCChica");
                });

            modelBuilder.Entity("cossmil.Models.contabilidad_cajachica", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<string>("aprobaciones")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("comentario")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fechaf")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fechai")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("montoinicial")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("otros")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("responsable")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("totalcompras")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("totalfac")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("totalrecibos")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("transacciones")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Cajachica");
                });

            modelBuilder.Entity("cossmil.Models.FarmT", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<int>("cantidadpedida")
                        .HasColumnType("int");

                    b.Property<string>("codigosiga")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("codigovademecum")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("descripcion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fechav")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("observaciones")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("unidad")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("FarmaciaTab");
                });

            modelBuilder.Entity("cossmil.Models.Medicamentoesenciales", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<string>("codigo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("concentracion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("descripcion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("forma")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Mesenciales");
                });

            modelBuilder.Entity("cossmil.Models.Pcirugia", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<string>("fechaa")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fecham")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fechap")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("grado")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("hora")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("minuto")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("observaciones")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("paciente")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tipointer")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tiposangre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("unidad")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("ProgracionCirugia");
                });

            modelBuilder.Entity("cossmil.Models.PPacientesT", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<string>("cuidado")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("doctor")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("estado")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fecha")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nombrepaciente")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("pieza")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Pacientes");
                });

            modelBuilder.Entity("cossmil.Models.Precetas", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<string>("doctor")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fechaf")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fechai")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("horai")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("lapso")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("pieza")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("receta")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("recordatorio")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Recetas");
                });

            modelBuilder.Entity("cossmil.Models.Recibos", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<string>("nrorecibo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Recibosdb");
                });

            modelBuilder.Entity("cossmil.Models.registrocajachica", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<string>("aprobaciones")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("comentario")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("entregado")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fechai")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long?>("monto")
                        .HasColumnType("bigint");

                    b.Property<string>("nrorecibo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("transacciones")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("RegCajachica");
                });

            modelBuilder.Entity("cossmil.Models.Resultadocajachica", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<string>("montotr")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("ResTCChica");
                });

            modelBuilder.Entity("cossmil.Models.resumeCajachica", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<string>("montor")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("montotr")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("ResumeCChica");
                });

            modelBuilder.Entity("cossmil.Models.tiposcuentas", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<string>("cuenta")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tipo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("TiposCuentasCont");
                });
#pragma warning restore 612, 618
        }
    }
}
