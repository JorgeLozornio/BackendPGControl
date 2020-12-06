import { Router } from 'express'
const router = Router();

import { getVentas, crearVenta, getVenta, deleteVenta  } from '../controllers/ventas.controller'

router.route('/')
    .get(getVentas)
    .post(crearVenta);

router.route('/:postId')
    .get(getVenta)
    .delete(deleteVenta);

export default router;