import {Router, Request, Response} from 'express';
import Server from '../class/server';

 const router = Router();

router.get('/mensajes',(req: Request, res: Response) => {
    res.status(200).json({
        ok:true,
        mensaje: 'todo esta bien'
    });
});

router.post('/mensajes',(req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const server = Server.instance;
    const peyload = {
        de,
        cuerpo
    }
    server.io.emit('mensajeNuevo', peyload);
    res.status(200).json({
        ok:true,
        mensaje: 'Post Listo',
        cuerpo: cuerpo,
        usuario: de
    });
});
router.post('/mensajes/:id',(req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    const server = Server.instance;
    const peyload = {
        de,
        cuerpo
    }

    server.io.in(id).emit('mensajePrivado', peyload);

    res.status(200).json({
        ok:true,
        mensaje: 'Post Listo',
        cuerpo: cuerpo,
        usuario: de,
        id
    });
});
export default router;