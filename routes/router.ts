import {Router, Request, Response} from 'express';

 const router = Router();

router.get('/mensajes',(req: Request, res: Response) => {
    res.status(200).json({
        ok:true,
        mensaje: 'todo esta bien'
    });
});

router.post('/mensajes',(req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const usuario = req.body.user;

    res.status(200).json({
        ok:true,
        mensaje: 'Post Listo',
        cuerpo: cuerpo,
        usuario: usuario
    });
});
router.post('/mensajes/:id',(req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const usuario = req.body.user;
    const id = req.params.id;

    res.status(200).json({
        ok:true,
        mensaje: 'Post Listo',
        cuerpo: cuerpo,
        usuario: usuario,
        id
    });
});
export default router;