// email.service.ts

import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import { expirar } from './helpers/cel/expiracao';
import { confirmar } from './helpers/cel/confirmar';
import { avancar } from './helpers/cel/avancar';

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
      html: confirmar(destinatarioNome, cursosSelecionados).toString(),
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
      html: expirar(destinatarioNome, cursosSelecionados).toString(),
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
      html: avancar(destinatarioNome, cursosSelecionados).toString(),
    };

    return this.transporter.sendMail(mailOptions);
  }
}
