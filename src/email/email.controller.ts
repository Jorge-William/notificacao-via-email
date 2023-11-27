import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';
@Controller('notificacao')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get('tempo-expirado')
  async enviarEmailExpiracao() {
    const destinatarioEmail = 'pedro.wallauschek@sinergiaeducacao.com.br';
    const destinatarioNome = 'Pedro';
    const cursosSelecionados = ['Capoeira', 'Ballet', 'Natação'];

    try {
      await this.emailService.enviarEmailExpiracao(
        destinatarioEmail,
        destinatarioNome,
        cursosSelecionados,
      );

      return 'email enviado com sucesso';
    } catch (err) {
      return `O seguinte erro ocorreu ao tentar enviar o email: ${err}`;
    }
  }

  @Get('confirmacao-inscricao')
  async enviarEmailConfirmacao() {
    const destinatarioEmail = 'pedro.wallauschek@sinergiaeducacao.com.br';
    const destinatarioNome = 'Pedro';
    const cursosSelecionados = ['Capoeira', 'Ballet', 'Natação'];

    try {
      await this.emailService.enviarEmailConfirmacao(
        destinatarioEmail,
        destinatarioNome,
        cursosSelecionados,
      );

      return 'email enviado com sucesso';
    } catch (err) {
      return `O seguinte erro ocorreu ao tentar enviar o email: ${err}`;
    }
  }

  @Get('inscricao-liberada')
  async enviarEmaiAvancoFila() {
    const destinatarioEmail = 'pedro.wallauschek@sinergiaeducacao.com.br';
    const destinatarioNome = 'Pedro';
    const cursosSelecionados = ['Capoeira', 'Ballet', 'Natação'];

    try {
      await this.emailService.enviarEmailAvancoFila(
        destinatarioEmail,
        destinatarioNome,
        cursosSelecionados,
      );

      return 'email enviado com sucesso';
    } catch (err) {
      return `O seguinte erro ocorreu ao tentar enviar o email: ${err}`;
    }
  }
}
