import { param } from 'express-validator';
import { checkValidationResults } from './handleValidationErrors.js';

export const validateTaskId = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isInt()
    .withMessage('ID must be a number')
    .toInt(),
    
  checkValidationResults,
];