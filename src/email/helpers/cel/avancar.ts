export function avancar(nome: string, cursos: string[]): string {
  console.log(cursos);

  return `
  <!DOCTYPE html>
  <html lang="pt">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        footer {
          min-height: 200px;
          /* max-width: 600px; */
          /* margin: auto; */
          background: #d6141a;
          margin-top: 23px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .espacamento-icones {
          padding: 10px;
        }
  
        .barra-footer {
          height: 16px;
          background-color: #004a80;
          width: 100%;
        }
  
        .tabela-principal {
          /* padding: 0px 32px; */
          /* margin: auto; */
          max-width: 600px;
          /* display: flex; */
          /* flex-direction: column; */
        }
  
        .barra-divisoria {
          border: rgb(233, 233, 233) 1px solid;
          margin-top: 35px;
          max-width: 550px;
        }
      </style>
    </head>
    <body style="margin: 0px; font-family: Arial, Helvetica, sans-serif;">
      <table align="center" class="tabela-principal">
        <tr>
          <td align="center">
            <a href="https://www.cel.com.br/" target="_blank">
              <img
                src="https://sjc1.vultrobjects.com/sinergia-cdn/cel%20logo/Logo%20CEL%20Intercultural%20School_Colorido.png"
                height="100px"
                style="margin-top: 50px;"
              />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <hr class="barra-divisoria" />
          </td>
        </tr>
        <tr>
          <td>
            <h1
              style="
                color: #004a80;
                font-size: 20px;
                font-weight: 700;
                line-height: 114%;
                padding: 0px 32px;
              "
            >
              Olá, ${nome}
            </h1>
          </td>
        </tr>
        <tr>
          <td>
            <p style="color: #565656; padding: 0px 32px;">
              Boa notícia!<br /> Já é possível se inscrever no(s) curso(s)
              <span style="font-weight: 700;">${cursos.join(
                ', ',
              )}</span>. Entre no
              portal e efetue a inscrição.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p
              style="
                font-size: 1rem;
                font-weight: 500;
                color: #575757;
                padding: 0px 32px;
              "
            >
              Abraços, <br />Equipe Centro Educacional da Lagoa
            </p>
          </td>
        </tr>
        <tr align="center">
          <td>
            <a href="#" style="text-decoration: none;">
              <button
                style="
                  width: 144px;
                  border-radius: 25px;
                  border: solid #004a80 2px;
                  height: 40px;
                  margin-top: 56px;
                  color: #004a80;
                  font-weight: 600;
                "
                onMouseOver="this.style.backgroundColor='#004a80', this.style.color='white'"
                onMouseOut="this.style.backgroundColor='white',this.style.color='#004a80'"
              >
                Ir para o portal
              </button>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <hr class="barra-divisoria" />
          </td>
        </tr>
        <tr>
          <td align="center">
            <p
              style="
                font-size: 0.7rem;
                color: #565656;
                max-width: 422px;
                padding: 0px 32px;
              "
            >
              Por favor, pedimos que você não responda esse e-mail, pois se trata
              de uma mensagem automática.
            </p>
          </td>
        </tr>
      </table>
      
    </body>
  </html>
            `;
}
