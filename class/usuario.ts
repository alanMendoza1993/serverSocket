

export class Usuario {
    public nombre: string;
    public id: string;
    public sala: string;
    constructor( id:string) {
        this.nombre = 'sin-nombre';
        this.sala = 'sin-sala';
        this.id = id;
    }
}