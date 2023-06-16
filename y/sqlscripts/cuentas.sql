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

SELECT activonivel, nombrecuenta AS Activo_N2 FROM Activocuenta
UNION
SELECT totalnivel, nombrecuenta AS Activo_N3 FROM Activocuenta3
UNION
SELECT totalnivel, nombrecuenta AS Activo_N4 FROM Activocuenta4
UNION
SELECT totalnivel, nombrecuenta AS Activo_N5 FROM Activocuenta5
UNION
SELECT totalnivel, nombrecuenta AS Activo_N6 FROM Activocuenta6
ORDER BY activonivel;

--PLan de Cuentas Pasivos
SELECT activonivel, nombrecuenta AS Pasivo_N2 FROM Pasivocuentan2
UNION
SELECT totalnivel, nombrecuenta AS Activo_N3 FROM Pasivocuentan3
UNION
SELECT totalnivel, nombrecuenta AS Activo_N4 FROM Pasivocuentan4
UNION
SELECT totalnivel, nombrecuenta AS Activo_N5 FROM Pasivocuentan5
UNION
SELECT totalnivel, nombrecuenta AS Activo_N6 FROM Pasivocuentan6
ORDER BY activonivel;

--PLan de Cuentas Patrimonio
