import { Request, Response } from 'express';
import { pingService } from '../services/ping.service';

class PingController {
	getPing(_req: Request, res: Response) {
		res.send(pingService.answerPing());
	}
}

export const pingController = new PingController();
