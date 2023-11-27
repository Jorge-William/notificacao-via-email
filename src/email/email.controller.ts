import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';
@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get()
  async enviarEmail() {
    const destinatarioEmail = 'ojorgewilliamfurtado@gmail.com';
    const destinatarioNome = 'Jorge William';
    const cursosSelecionados = ['Curso 1', 'Curso 2'];

    await this.emailService.enviarEmailConfirmacao(
      destinatarioEmail,
      destinatarioNome,
      cursosSelecionados,
    );

    return 'Email enviado com sucesso';
  }
}
