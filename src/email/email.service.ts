// email.service.ts

import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config(); // Carrega variáveis de ambiente do arquivo .env
console.log(process.env.EMAIL_USER);

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    // Configurar o transporter do nodemailer com as suas credenciais do .env
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async enviarEmailConfirmacao(
    destinatarioEmail: string,
    destinatarioNome: string,
    cursosSelecionados: string[],
  ) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: destinatarioEmail,
      subject: 'Confirmação de Inscrição',
      text: `Olá ${destinatarioNome},\n\nVocê selecionou os seguintes cursos: ${cursosSelecionados.join(
        ', ',
      )}. Corpo do e-mail de confirmação`,
    };

    return this.transporter.sendMail(mailOptions);
  }

  async enviarEmailExpiracao(
    destinatarioEmail: string,
    destinatarioNome: string,
    cursosSelecionados: string[],
  ) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: destinatarioEmail,
      subject: 'Aviso de Expiração',
      text: `Olá ${destinatarioNome},\n\nVocê selecionou os seguintes cursos: ${cursosSelecionados.join(
        ', ',
      )}. Corpo do e-mail de aviso de expiração`,
    };

    return this.transporter.sendMail(mailOptions);
  }

  async enviarEmailAvancoFila(
    destinatarioEmail: string,
    destinatarioNome: string,
    cursosSelecionados: string[],
  ) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: destinatarioEmail,
      subject: 'Avanço na Fila de Espera',
      text: `Olá ${destinatarioNome},\n\nVocê selecionou os seguintes cursos: ${cursosSelecionados.join(
        ', ',
      )}. Corpo do e-mail de avanço na fila de espera`,
    };

    return this.transporter.sendMail(mailOptions);
  }
}
