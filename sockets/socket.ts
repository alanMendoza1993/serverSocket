import { Socket } from 'socket.io';


export const desconectar = (cliente: Socket) => {
    cliente.on('disconnect', () => {
        console.log('cliente desconectado');
    });
}

export const mensaje = (cliente: Socket, io: SocketIO.Server) => {
    cliente.on('mensaje', (mensaje: { de:string, cuerpo:string}) => {
        console.log('el mensaje es', mensaje);
        io.emit('mensajeNuevo', mensaje);
    });
}