import { Request, Response} from 'express'

import { connect } from '../database'
import { Usuarios } from  '../interface/usuarios'

//CONSULTA LOS USUARIOS 
export async function getUsuarios(req: Request, res: Response): Promise<Response>{
    const conn = await connect();
    const usuarios = await conn.query('select * from usuarios');
    return res.json(usuarios[0]);
}

//CREA USUARIOS
export async function createUsuario(req: Request, res: Response){
    const newUsuario: Usuarios = req.body;
    const conn = await connect();
    conn.query('insert into usuarios set ?',[newUsuario]);
    return res.json({
        message: 'Usuario creado'
    })
}

//CONSULTA ESPECIFICA
export async function getUsuario(req: Request, res: Response): Promise<Response>{
    const id = req.params.postId;
    const conn = await connect();
    const posts = await conn.query('select * from usuarios where idusuario = ?',[id]);
    return res.json(posts[0]);
}

//ELIMINAR USUARIO
export async function deleteUsuario(req: Request, res: Response){
    const id = req.params.postId;
    const conn = await connect();
    await conn.query('delete from usuarios where idusuario= ? ',[id]);
    return res.json({
        message: 'Usuario eliminado'
    });
}