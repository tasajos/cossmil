/* ver activo cuenta */
select * from Activocuenta


/*Extraer datos para nivel1*/
SELECT TOP (1000) [id]
      ,[nivel]
      ,[nombrecuenta]
      ,[cuentamayor]
      ,[FechaCreacion]
      ,[numero]
      ,[totalnum]
      ,[activonivel]
      ,[actmayor]
FROM [COSSMIL].[dbo].[Activocuenta]
WHERE LEFT(activonivel, 1) = '1'


/* Cuentas n3*/

SELECT TOP (1000)
    [id],
    [nivel],
    [nombrecuenta],
    [cuentamayor],
    [numero],
    [totalnum],
    [FechaCreacion],
    CONCAT([totalnum], '.', [numero],' ',[nombrecuenta] ) AS [totalnivel]
FROM [COSSMIL].[dbo].[Activocuenta3]




/* plan de cuentas */

--select activonivel from Activocuenta 
SELECT activonivel AS Activo_N2 FROM Activocuenta;

SELECT totalnivel AS Activo_N3 FROM Activocuenta3;

SELECT totalnivel AS Activo_N4 FROM Activocuenta4;


--PLan de Cuentas Activos

SELECT activonivel, nombrecuenta FROM Activocuenta
UNION
SELECT totalnivel, nombrecuenta FROM Activocuenta3
UNION
SELECT totalnivel, nombrecuenta FROM Activocuenta4
UNION
SELECT totalnivel, nombrecuenta FROM Activocuenta5
UNION
SELECT totalnivel, nombrecuenta FROM Activocuenta6
ORDER BY activonivel;

--PLan de Cuentas Pasivos
SELECT activonivel, nombrecuenta FROM Pasivocuentan2
UNION
SELECT totalnivel, nombrecuenta FROM Pasivocuentan3
UNION
SELECT totalnivel, nombrecuenta FROM Pasivocuentan4
UNION
SELECT totalnivel, nombrecuenta FROM Pasivocuentan5
UNION
SELECT totalnivel, nombrecuenta FROM Pasivocuentan6
ORDER BY activonivel;

--PLan de Cuentas Patrimonio
SELECT activonivel, nombrecuenta FROM Patrimonion2
UNION
SELECT totalnivel, nombrecuenta FROM Patrimonion3
UNION
SELECT totalnivel, nombrecuenta FROM Patrimonion4
UNION
SELECT totalnivel, nombrecuenta FROM Patrimonion5
UNION
SELECT totalnivel, nombrecuenta FROM Patrimonion6
ORDER BY activonivel;


--PLan de Cuentas de Distribucion
SELECT activonivel, nombrecuenta FROM CuentaDistribucion2
UNION
SELECT totalnivel, nombrecuenta FROM CuentaDistribucion3
UNION
SELECT totalnivel, nombrecuenta FROM CuentaDistribucion4
UNION
SELECT totalnivel, nombrecuenta FROM CuentaDistribucion5
UNION
SELECT totalnivel, nombrecuenta FROM CuentaDistribucion6
ORDER BY activonivel;


--PLan de Cuentas de Productos
SELECT activonivel, nombrecuenta FROM CuentaProducto2
UNION
SELECT totalnivel, nombrecuenta FROM CuentaProducto3
UNION
SELECT totalnivel, nombrecuenta FROM CuentaProducto4
UNION
SELECT totalnivel, nombrecuenta FROM CuentaProducto5
UNION
SELECT totalnivel, nombrecuenta FROM CuentaProducto6
ORDER BY activonivel;

--PLan de Costo de Operacion
SELECT activonivel, nombrecuenta FROM CostoOperacion2
UNION
SELECT totalnivel, nombrecuenta FROM CostoOperacion3
UNION
SELECT totalnivel, nombrecuenta FROM CostoOperacion4
UNION
SELECT totalnivel, nombrecuenta FROM CostoOperacion5
UNION
SELECT totalnivel, nombrecuenta FROM CostoOperacion6
ORDER BY activonivel;
