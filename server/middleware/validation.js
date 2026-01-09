import { body, validationResult } from 'express-validator';

export const validateReserva = [
  body('nome')
    .trim()
    .notEmpty()
    .withMessage('O nome é obrigatório')
    .isLength({ min: 2, max: 100 })
    .withMessage('O nome deve ter entre 2 e 100 caracteres'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('O email é obrigatório')
    .isEmail()
    .withMessage('Email inválido')
    .normalizeEmail(),

  body('telefone')
    .optional()
    .trim()
    .matches(/^(\+351)?[0-9]{9,13}$/)
    .withMessage('Número de telefone inválido'),

  body('campo')
    .optional()
    .trim()
    .isIn(['campo1', 'campo2', 'campo3', 'campo4'])
    .withMessage('Campo inválido'),

  body('data')
    .notEmpty()
    .withMessage('A data é obrigatória')
    .isISO8601()
    .withMessage('Formato de data inválido')
    .custom((value) => {
      const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        throw new Error('A data não pode ser no passado');
      }
      return true;
    }),

  body('horario')
    .notEmpty()
    .withMessage('O horário é obrigatório')
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage('Formato de horário inválido (HH:MM)'),

  body('plano')
    .optional()
    .trim()
    .isIn(['casual', 'academy', 'elite'])
    .withMessage('Plano inválido'),

  body('mensagem')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('A mensagem não pode exceder 500 caracteres'),
];

export const validateContacto = [
  body('nome')
    .trim()
    .notEmpty()
    .withMessage('O nome é obrigatório')
    .isLength({ min: 2, max: 100 })
    .withMessage('O nome deve ter entre 2 e 100 caracteres'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('O email é obrigatório')
    .isEmail()
    .withMessage('Email inválido')
    .normalizeEmail(),

  body('telefone')
    .optional()
    .trim()
    .matches(/^(\+351)?[0-9]{9,13}$/)
    .withMessage('Número de telefone inválido'),

  body('mensagem')
    .trim()
    .notEmpty()
    .withMessage('A mensagem é obrigatória')
    .isLength({ min: 10, max: 1000 })
    .withMessage('A mensagem deve ter entre 10 e 1000 caracteres'),
];

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      sucesso: false,
      erro: 'Dados inválidos',
      detalhes: errors.array().map(err => ({
        campo: err.path,
        mensagem: err.msg
      }))
    });
  }

  next();
};
