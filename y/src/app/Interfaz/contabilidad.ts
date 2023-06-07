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
            activoniveln2:string,
            totalnum:string,
            numero:string,
            
            }

            export interface ActivoIntern3 {
                // columna db 
                id?: number,
                nivel: number,
                nombrecuenta:string,
                cuentamayor:number,
                totalnum:string,
                numero:string,
                
                
                }