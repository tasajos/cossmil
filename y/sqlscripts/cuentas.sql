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
