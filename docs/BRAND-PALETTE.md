# Identidade · Ju Salva Patinhas

Paleta derivada de `identity-reference.png`, a referência fornecida pelo cliente. A imagem tem um perfil de cor de monitor incorporado; as amostras foram interpretadas em sRGB antes de definir os valores CSS. O arquivo original foi preservado.

Veja o quadro de cores em [brand-palette.svg](brand-palette.svg).

| Cor        | Hexadecimal | Uso                                                         |
| ---------- | ----------- | ----------------------------------------------------------- |
| Magenta    | `#C21D62`   | Botões principais, doações, destaques e assinatura da marca |
| Turquesa   | `#20ADBA`   | Faixas, curvas e molduras; texto em grafite                 |
| Menta      | `#E6EDE8`   | Fundo da identidade, hero e seções de apoio                 |
| Petróleo   | `#086D77`   | Links, ícones e controles sobre fundos claros               |
| Grafite    | `#273133`   | Texto principal e contornos das molduras                    |
| Papel      | `#F8FAF7`   | Cartões, navegação e texto sobre magenta                    |
| Rosa suave | `#F7E5EC`   | Área de apoio e estados selecionados                        |
| Água suave | `#D8F0F1`   | Ícones, etiquetas e seção do Instagram                      |

Magenta, turquesa e menta vêm das grandes áreas planas da referência. As outras cores são extensões funcionais para a interface.

## Legibilidade

Contrastes calculados pela luminância relativa sRGB:

- Papel sobre magenta: **5,49:1**.
- Grafite sobre turquesa: **4,92:1**.
- Petróleo sobre menta: **5,09:1**.
- Grafite sobre menta: **11,21:1**.

Turquesa claro é usado com texto escuro, não com texto branco pequeno. Os tokens ficam em `src/styles/tokens.css`.

## Aplicação visual

- Molduras de fotografia com borda fina, legenda serifada e placas deslocadas em magenta e turquesa, inspiradas nos cartões da referência. As placas são sombras planas, sem desfoque.
- Curvas largas com contorno grafite como elemento gráfico do hero.
- Fraunces para títulos e legendas; DM Sans para leitura e controles.
- Navegação e ações mantidas legíveis em celular; uso das cores fortes concentrado em identidade e interações.

## Informações fornecidas pelo cliente

- **Projeto independente**, em **Porto Alegre, RS**.
- **Resgate, reabilitação e adoção** de cães e gatos.
- Resgatados da [@ju.chiarello](https://www.instagram.com/ju.chiarello/).
- Instagram: [@jusalvapatinhas](https://www.instagram.com/jusalvapatinhas/).
- Chave Pix: **jusalvapatinhas@gmail.com**.
- [Questionário de adoção](https://docs.google.com/forms/d/e/1FAIpQLSfkQFOhXaBhwnUa_JRVEOk2PgU1Ko6pur0qtlhpQ9Y27tnruA/viewform).

O questionário usa a URL direta decodificada do redirecionamento do Instagram. A verificação sem sessão de Google foi redirecionada para login; as permissões e o conteúdo do formulário permanecem sob controle do projeto. Nenhum formulário foi enviado e nenhuma doação foi realizada durante a implementação.

Os dados e links estão centralizados em `src/data/project.ts`. Os animais da galeria continuam demonstrativos, com aviso e acesso aos resgatados reais pelo Instagram.
