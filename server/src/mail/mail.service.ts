import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService,
  ) {}

  async sendEmail({
    to,
    subject,
    content,
  }: {
    to: string;
    subject: string;
    content: string;
  }) {
    await this.mailerService.sendMail({
      to,
      subject,
      from: `Kuma Technologies <${this.configService.get('APP_GMAIL_EMAIL')}>`,
      text: content,
      html: content,
    });
  }
}
