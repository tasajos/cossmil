export interface cajachicaInter {
    // columna db 
    id?: number,
    montoinicial: string,
    transacciones: string,
    responsable?: string,
    aprobaciones:number,
    fechaf?: string,
    fechai?: string,
    fechaa?: string,
    totalcompras?: string,
    totalfac?:string,
    totalrecibos?:string,
    otros?:string,
    comentario:string,
    }

    export interface aperturacajachicaInter {
        // columna db 
        id?: number,
        montoinicial: string,
        transacciones: string,
        aprobaciones:number,
        fechai: string,
        comentario:string,
        }
    
        export interface registrocajachicaInter {
            // columna db 
            id?: number,
            monto: string,
            transacciones: string,
            aprobaciones:number,
            fechai: string,
            comentario:string,
            nrorecibo:number,
            }

            export interface copiarcajachicaInter {
                // columna db 
                id?: number,
                montotr: string,
               
                }

                export interface nroreciboInter {
                    // columna db 
                    id?: number,
                    nrorecibo: string,
                   
                    }