import { Router } from "express";
import { body } from "express-validator";
import { validate } from "../middleware/validate.js";
import { wrap } from "../middleware/asyncHandler.js";
import { shorten } from "./urlController.js";

const router = Router();

router.post('/shorten', body('url').isURL().withMessage('Invalid URL'), validate, wrap(shorten));

export default router;
