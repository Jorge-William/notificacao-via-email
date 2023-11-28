## Descrição

Modulo de envio de email que que terá suas rotas operadas por outros modulos internos

## Instalando as dependências

```bash
$ yarn
```

## Arquivo .env

Crie um arquivo chamado .env na raiz do projeto (ou adicione as variáveis abaixo ao .env existente) com o endereço de email do remetente e a senha desse email.

```bash
EMAIL_USER="endereco@provedor.com.br"
EMAIL_PASS="A senha da conta de email"
```

![Organização de pastas](https://github.com/Jorge-William/notificacao-via-email/assets/19416864/190c8e01-a993-4da8-8bff-651df88180ee)

## Rodando o app

```bash
# desenvolvimento watch mode
$ yarn run start:dev


## Licença
[MIT licensed](LICENSE).
```

## Rotas

#### Rota base:

localhost:3000/notificacao

#### Avanço na fila:

localhost:3000/notificacao/inscricao-liberada

#### Expiração do tempo para inscrição:

localhost:3000/notificacao/tempo-expirado

#### Confirmação de inscrição(resumo dos cursos aos quais o usuário se inscreveu):

localhost:3000/notificacao/confirmacao-inscricao


## Imagens de exemplo

![cel](https://github.com/Jorge-William/notificacao-via-email/assets/19416864/c336e3bc-d3b2-486e-963a-847e96131919)

![franco](https://github.com/Jorge-William/notificacao-via-email/assets/19416864/d56173f7-b730-4b97-9111-8cbd1308a6da)

