import { Heading, Html, Body, Text, Link, Tailwind } from "@react-email/components";
import * as React from "react";

interface ConfirmationTemplateProps {
    domain: string;
    token: string;
}

export function ConfirmationTemplate({ domain, token }: ConfirmationTemplateProps) {
    const confirmationUrl = `${domain}/auth/new-verification?token=${token}`;

    return (
        <Tailwind>
            <Html>
                <Body className="text-black">
                    <Heading>Подтверждение почты</Heading>
                    <Text>
                        Здравствуйте. Чтобы подтвертить адрес электронной почты,
                        пожалуйста, перейдите по следующей ссылке:
                    </Text>
                    <Link href={confirmationUrl}>Подтвердить email</Link>
                    <Text>
                        Эта ссылка будет действовать в течение 1 часа. Если вы не запрашивали это письмо, пожалуйста, проигнорируйте его.
                    </Text>
                    <Text>
                        С уважением, StockHub Team.
                    </Text>
                </Body>
        </Html>
        </Tailwind>
    )
}