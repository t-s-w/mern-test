import express from 'express';
import { create, get } from '../../controllers/api/users.js';
const router = express.Router();


// POST /api/users
router.post('/', create);
router.get('/:email', get);

export default router;