import { Router } from 'express'
const router = Router();

import { getUsuarios, createUsuario, getUsuario,deleteUsuario } from '../controllers/usuarios.controller'

router.route('/')
    .get(getUsuarios)
    .post(createUsuario);

router.route('/:postId')
    .get(getUsuario)
    .delete(deleteUsuario);

export default router;