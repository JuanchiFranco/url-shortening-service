import { Router } from "express";
import { body, param } from "express-validator";
import { validate } from "../middleware/validate.js";
import { wrap } from "../middleware/asyncHandler.js";
import { shorten, getUrlByShortCode } from "./urlController.js";

const router = Router();

router.post('/shorten', body('url').isURL().withMessage('Invalid URL'), validate, wrap(shorten));
router.get('/shorten/:shortCode', param('shortCode').isString().withMessage('Invalid short code'), validate, wrap(getUrlByShortCode));

export default router;
