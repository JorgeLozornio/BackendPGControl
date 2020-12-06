import { Request, Response} from 'express'

import { connect } from '../database'
import { Piezas } from  '../interface/piezapollo'

//CONSULTA LAS PIEZAS DE POLLO
export async function getPiezas(req: Request, res: Response): Promise<Response>{
    const conn = await connect();
    const ventas = await conn.query('select * from piezapollo');
    return res.json(ventas[0]);
}

//CREA PIEZAS DE POLLO
export async function crearPieza(req: Request, res: Response){
    const newUsuario: Piezas = req.body;
    const conn = await connect();
    conn.query('insert into piezapollo set ?',[newUsuario]);
    return res.json({
        message: 'Pieza creada'
    })
}

//CONSULTA ESPECIFICA
export async function getPieza(req: Request, res: Response): Promise<Response>{
    const id = req.params.postId;
    const conn = await connect();
    const posts = await conn.query('select * from piezapollo where idpieza = ?',[id]);
    return res.json(posts[0]);
}

//ELIMINAR PIEZA DE POLLO
export async function deletePieza(req: Request, res: Response){
    const id = req.params.postId;
    const conn = await connect();
    await conn.query('delete from piezapollo where idvpieza ? ',[id]);
    return res.json({
        message: 'Pieza eliminada'
    });
}