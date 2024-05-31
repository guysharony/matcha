import { CronJob } from 'cron';
import { userService } from '../services/user.service';

export const removeNotActivatedTask = new CronJob('0 * * * * *', function() {
    console.log('Running task - Remove not activated users');
    userService.removeNotActivatedWithin24Hours();
  },
  null,
  false,
  'Europe/Paris'
);
