import { Request, Response } from 'express';
import { pingService } from '../services';

export class PingController {
	getPing(_req: Request, res: Response) {
		res.send(pingService.answerPing());
	}
}
