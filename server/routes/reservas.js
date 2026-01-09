import express from 'express';
import {
  criarReserva,
  obterReservas,
  obterHorariosDisponiveis
} from '../controllers/reservasController.js';
import {
  validateReserva,
  handleValidationErrors
} from '../middleware/validation.js';

const router = express.Router();

router.post('/', validateReserva, handleValidationErrors, criarReserva);

router.get('/', obterReservas);

router.get('/horarios-disponiveis', obterHorariosDisponiveis);

export default router;
