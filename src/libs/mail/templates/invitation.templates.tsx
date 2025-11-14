import { Heading, Html, Body, Text, Link, Tailwind } from "@react-email/components";
import * as React from "react";

interface InvitationTemplateProps {
    domain: string;
    firstName: string;
    token: string;
}

export function InvitationTemplate({ domain, firstName, token }: InvitationTemplateProps) {
    const invitationUrl = `${domain}/organizations/invitations/accept?token=${token}`;

    return (
        <Tailwind>
            <Html>
                <Body className="text-black">
                    <Heading>Приглашение в организацию</Heading>
                    <Text>
                        Здравствуйте, {firstName}!
                    </Text>
                    <Text>
                        Вас пригласили присоединиться к организации в системе StockHub.
                        Чтобы принять приглашение и стать участником организации,
                        пожалуйста, перейдите по следующей ссылке:
                    </Text>
                    <Link href={invitationUrl}>Принять приглашение</Link>
                    <Text>
                        Эта ссылка будет действовать в течение 7 дней. Если вы не запрашивали это приглашение, пожалуйста, проигнорируйте его.
                    </Text>
                    <Text>
                        С уважением, StockHub Team.
                    </Text>
                </Body>
            </Html>
        </Tailwind>
    );
}

