import { Inject, Injectable } from '@nestjs/common';
import { PRISMA_DATABASE } from '@/database/database-constants';
import { PrismaClient } from 'prisma/client/mysql';

@Injectable()
export class SharedService {
  constructor(@Inject(PRISMA_DATABASE) private prismaClient: PrismaClient) {}

  getSubject(subject: string, user: any, args?: any) {
    return this.prismaClient[subject].findUnique({
      where: { id: user.id },
      ...(args || []),
    });
  }
}
