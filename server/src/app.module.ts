import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { ProfileModule } from './dashboard/profile/profile.module';

@Module({
  imports: [AuthModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
