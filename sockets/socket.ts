import { Socket } from 'socket.io';
import { UsuariosLista } from '../class/usuarios-lista';
import { Usuario } from '../class/usuario';


export const usuariosConectados = new UsuariosLista();

export const conectarCliente = (cliente: Socket) => {
    const usuario = new Usuario(cliente.id);
    usuariosConectados.agregar(usuario);
}
export const desconectar = (cliente: Socket) => {
    cliente.on('disconnect', () => {

        usuariosConectados.borrarUsuario(cliente.id);
        console.log('cliente desconectado');
    });
}
export const configUsuario = (cliente: Socket, io:SocketIO.Server) => {
   
    cliente.on('configurar-usuario', ( usuario: string, callback: Function) => {
        usuariosConectados.actualizarNombre(cliente.id,usuario.nombre);
        callback({
            ok:true,
            mensaje:`Usuario ${usuario.nombre} configurado`
        });
    });
}
export const mensaje = (cliente: Socket, io: SocketIO.Server) => {
    cliente.on('mensaje', (mensaje: { de:string, cuerpo:string}) => {
        console.log('el mensaje es', mensaje);
        io.emit('mensajeNuevo', mensaje);
    });
}