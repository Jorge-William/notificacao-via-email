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
                    background: #a71c20;
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
                      <a href="https://liceufranco.com.br/" target="_blank">
                        <img
                          src="https://sjc1.vultrobjects.com/sinergia-cdn/franco%20logo/logo%20franco%20Colorida%20Horizontal.png"
                          height="200px"
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
                        Infelizmente o tempo limite para a realização da matricula do(s) curso(s)
                        <span style="font-weight: 700;"> ${cursos.join(
                          ', ',
                        )} </span> expirou.
                        Retorne ao portal e efetue uma nova inscrição.
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
                        Abraços, <br />Equipe Liceu Franco Brasileiro
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
                <tr>
                  <td>
                    <footer>
                      <table align="center" style="padding: 30px;">
                        <table align="center" style="margin-bottom: 3px;">
                          <tr>
                            <td>
                              <a href="https://www.cel.com.br/" target="_blank">
                                <img
                                  src="./logo/logo franco Colorida Vertical Branca.png"
                                  alt=""
                                  height="150px"
                                />
                              </a>
                            </td>
                          </tr>
                        </table>
                        <table align="center" style="margin-bottom: 33px;">
                          <tr>
                            <td class="espacamento-icones">
                              <a
                                href="https://www.instagram.com/colegiofrancobrasileiro/"
                                target="_blank"
                                ><img src="./social/InstagramLogo.png" alt="" height="22px"
                              /></a>
                            </td>
                            <td class="espacamento-icones">
                              <a href="https://twitter.com/liceufranco" target="_blank"
                                ><img src="./social/TwitterLogo.png" alt="" height="22px"
                              /></a>
                            </td>
                            <td class="espacamento-icones">
                              <a
                                href="https://www.facebook.com/colegiofrancobrasileiro"
                                target="_blank"
                                ><img
                                  src="./social/FacebookLogo.png"
                                  alt=""
                                  height="22px"
                                />
                              </a>
                            </td>
                            <td class="espacamento-icones">
                              <a
                                href="https://pt.linkedin.com/company/col%C3%A9gio-liceu-franco-brasileiro"
                                target="_blank"
                                ><img
                                  src="./social/LinkedinLogo.png"
                                  alt=""
                                  height="22px"
                                />
                              </a>
                            </td>
                            <td class="espacamento-icones">
                              <a
                                href="https://www.youtube.com/channel/UCquX2i8JG0dK3pFgSz5pF1w"
                                target="_blank"
                                ><img src="./social/YoutubeLogo.png" alt="" height="22px" />
                              </a>
                            </td>
                          </tr>
                        </table>
                        <div class="barra-footer"></div>
                      </table>
                    </footer>
                  </td>
                </tr>
              </body>
            </html>
            
            `;
}
