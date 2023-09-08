import express from 'express';

const router = express.Router();

import {generateImage} from '../controllers/openaiController.js';

router.post('/generate-image', generateImage);

export default router;
