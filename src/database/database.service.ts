import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }

  async onModuleInit() {
    let connected = false;
    let retries = 5;

    while (!connected && retries > 0) {
      try {
        await this.$connect();
        connected = true;
        console.log('✅ Conectado ao banco de dados');
      } catch (err: unknown) {
        retries--;
        console.warn(`🔁 Tentando conectar ao banco... (${5 - retries}/5)`);
        if (err instanceof Error) {
          console.error('Erro:', err.message);
        } else {
          console.error('Erro desconhecido:', err);
        }
        await new Promise((res) => setTimeout(res, 3000));
      }
    }

    if (!connected) {
      throw new Error('❌ Falha ao conectar ao banco após várias tentativas.');
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async cleanUp() {
    await this.$disconnect();
  }
}
