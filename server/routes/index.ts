import express, { Request, Response } from 'express';

import config from '../../src/config';
import { Home } from '../mock-data';

const router = express.Router();

// Get Home Page
router.get(config.api.home.basic, (req: Request, res: Response) => {
	console.log('reached');
	return res.json(Home);
});
export default router;
