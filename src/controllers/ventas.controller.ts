import { Request, Response} from 'express'

import { connect } from '../database'
import { Ventas } from  '../interface/ventas'

//CONSULTA LAS VENTAS
export async function getVentas(req: Request, res: Response): Promise<Response>{
    const conn = await connect();
    const ventas = await conn.query('select * from ventas');
    return res.json(ventas[0]);
}

//CREA USUARIOS
export async function crearVenta(req: Request, res: Response){
    const newUsuario: Ventas = req.body;
    const conn = await connect();
    conn.query('insert into usuarios set ?',[newUsuario]);
    return res.json({
        message: 'Usuario creado'
    })
}

//CONSULTA ESPECIFICA
export async function getVenta(req: Request, res: Response): Promise<Response>{
    const id = req.params.postId;
    const conn = await connect();
    const posts = await conn.query('select * from ventas where idventa = ?',[id]);
    return res.json(posts[0]);
}

//ELIMINAR VENTA
export async function deleteVenta(req: Request, res: Response){
    const id = req.params.postId;
    const conn = await connect();
    await conn.query('delete from ventas where idventa ? ',[id]);
    return res.json({
        message: 'Venta eliminada'
    });
}