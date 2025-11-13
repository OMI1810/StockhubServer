import {ConfigService} from '@nestjs/config';
import { isDev } from '@/libs/common/utils/is-dev.utils';
import { MailerOptions } from '@nestjs-modules/mailer';



/*export const getMailerConfig = async (
    configService: ConfigService
): Promise<MailerOptions> => ({
    transport: {
        host: configService.getOrThrow<string>('MAIL_HOST'),
        port: configService.getOrThrow<number>('MAIL_PORT'),
        secure: !isDev(configService),
        auth: {
            user: configService.getOrThrow<string>('MAIL_LOGIN'),
            password: configService.getOrThrow<string>('MAIL_PASSWORD'),
        },
    },
    defaults: {
        from: configService.getOrThrow<string>('MAIL_FROM'),
    },
});*/

export const getMailerConfig = async (
    configService: ConfigService,
  ): Promise<MailerOptions> => {
    const port = Number(configService.getOrThrow('MAIL_PORT'));
  
    return {
      transport: {
        host: configService.getOrThrow('MAIL_HOST'),
        port,
        secure: port === 465,
        auth: {
          user: configService.getOrThrow('MAIL_LOGIN'),
          pass: configService.getOrThrow('MAIL_PASSWORD'),
        },
      },
      defaults: {
        from: configService.getOrThrow<string>('MAIL_FROM'),
      },
    };
  };