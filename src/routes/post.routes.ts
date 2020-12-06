import { Router } from 'express'
const router = Router();

import { getPost,createUsuario,getPost1, deleteUsuario } from '../controllers/post.controller'

router.route('/')
    .get(getPost)
    .post(createUsuario);

router.route('/:postId')
    .get(getPost1)
    .delete(deleteUsuario);

export default router;