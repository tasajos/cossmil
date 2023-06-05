export interface registrarcuentacontabilidad {
    // columna db 
    id?: number,
    cuenta: string,
    tipo:string,
    }

    export interface cuentacontabilidadInter {
        // columna db 
        id?: number,
        cuenta: string,
        tipo:string,
        }

    
        export interface ActivoInter {
            // columna db 
            id?: number,
            nivel: number,
            nombrecuenta:string,
            cuentamayor:number,
            activonivel:string,
            totalnum:string,
            numero:string,
            }