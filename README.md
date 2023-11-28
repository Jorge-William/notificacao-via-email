## Descrição

Modulo de envio de email que que terá suas rotas operadas por outros modulos internos

## Instalando as dependências

```bash
$ yarn
```

## Arquivo .env

Crie um arquivo chamado .env na raiz do projeto (ou adicione as variáveis abaixo ao .env existente) com o endereço de email do remetente e a senha desse email.

```bash
EMAIL_USER = "endereco@provedor.com.br";
EMAIL_PASS = "A senha da conta de email"
```

## Rodando o app

```bash
# desenvolvimento watch mode
$ yarn run start:dev


## Licença
[MIT licensed](LICENSE).
```

## Rotas

Rota base:

http://localhost:3000/notificacao/

Avanço na fila:

Expiração do tempo para inscrição:
localhost:3000/notificacao/tempo-expirado
