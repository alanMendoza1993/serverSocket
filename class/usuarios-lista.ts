import { Usuario } from "./usuario";


export class UsuariosLista {
    private lista: Usuario [] = [];

    constructor(){}
    //Agregar Usuario
    public agregar( usuario: Usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }

    public actualizarNombre(id:string, nombre:string){
        console.log(id);
        console.log(nombre);
        for(let usuario of this.lista){
            if(usuario.id === id){
                usuario.nombre = nombre;
                break;
            }
        }

        console.log('===Actualizando Usuario');
        console.log(this.lista);

    }

    public getLista(){
        return this.lista;
    }

    public getUsuario(id:string){
        return this.lista.find(usuario => usuario.id === id);
    }

    //obtener usuarios en una sala en particular
    public getUsuariosSala(sala:string){
        return this.lista.filter(usuario => {
            return usuario.sala === sala;
        });
    }

    //borrar usuario
    public borrarUsuario(id:string){
        const temUser = this.getUsuario(id);

        this.lista = this.lista.filter( usuario => {
            return usuario.id !== id;
        });

        return temUser;
    }
}