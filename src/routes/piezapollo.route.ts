import { Router } from 'express'
const router = Router();

import {  getPieza, getPiezas, crearPieza, deletePieza } from '../controllers/piezapollo.controller';

router.route('/')
    .get(getPiezas)
    .post(crearPieza);

router.route('/')
    .get(getPieza)
    .delete(deletePieza);

export default router;