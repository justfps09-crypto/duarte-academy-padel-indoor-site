import express from 'express';
import {
  criarContacto,
  obterContactos
} from '../controllers/contactosController.js';
import {
  validateContacto,
  handleValidationErrors
} from '../middleware/validation.js';

const router = express.Router();

router.post('/', validateContacto, handleValidationErrors, criarContacto);

router.get('/', obterContactos);

export default router;
