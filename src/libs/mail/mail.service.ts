import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { ConfirmationTemplate } from './templates/confirmation.templates';
import { InvitationTemplate } from './templates/invitation.templates';
import { render } from '@react-email/components';

@Injectable()
export class MailService {
  public constructor(private readonly mailerService: MailerService, private readonly configService: ConfigService) {}

  public async sendConfirmationEmail(email: string, token: string) {
    const domain = this.configService.getOrThrow<string>('ALLOWED_ORIGIN');
    const html = await render(ConfirmationTemplate({ domain, token }));

    return this.sendMail(email, 'Подтверждение почты', html);
  }

  public async sendInvitationEmail(email: string, firstName: string, token: string) {
    const domain = this.configService.getOrThrow<string>('ALLOWED_ORIGIN');
    const html = await render(InvitationTemplate({ domain, firstName, token }));

    return this.sendMail(email, 'Приглашение в организацию', html);
  }

  private async sendMail(email: string, subject: string, html: string) {
    return this.mailerService.sendMail({
        to: email,
        subject,
        html,
    });
  }
}