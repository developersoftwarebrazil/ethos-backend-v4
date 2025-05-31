import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { promises as fsPromises } from 'fs';
import * as path from 'path';
@Injectable()
export class AuthLoggerService extends ConsoleLogger {
  async logToFile(entry) {
    const formattedEntry = `${Intl.DateTimeFormat('es-US', {
      dateStyle: 'short',
      timeStyle: 'short',
      timeZone: 'America/Chicago',
    }).format(new Date())}\t${entry}\n`;

    try {
      if (!fs.existsSync(path.join(__dirname, '..', '..', 'logs'))) {
        await fsPromises.mkdir(path.join(__dirname, '..', '..', 'logs'));
      }
      await fsPromises.appendFile(
        path.join(__dirname, '..', '..', 'logs', 'authLogFile.log'),
        formattedEntry,
      );
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }
  log(message: any, context?: string) {
    const entry = `S{context}\t${message}`;
    void this.logToFile(entry);
    super.log(message, context);
  }
  error(message: any, stackOrContext?: string) {
    const entry = `S{stackContext}\t${message}`;
    void this.logToFile(entry);
    super.error(message, stackOrContext);
  }
}
