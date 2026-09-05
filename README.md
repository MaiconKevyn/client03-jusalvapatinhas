# Ju Salva Patinhas

Interface para o projeto independente Ju Salva Patinhas, de resgate, reabilitação e adoção de cães e gatos em Porto Alegre, RS. Desenvolvida com React, TypeScript e [Vite](https://vite.dev/guide/).

## Rodar localmente

Requer Node.js 22.12 ou mais recente.

```sh
npm install
npm run dev
```

Abra http://localhost:5173. O servidor fica restrito à máquina local e usa uma porta fixa; se ela estiver ocupada, o Vite informa o conflito.

```sh
npm run build    # Validação TypeScript e build de produção em dist/
npm run lint     # Revisão estática dos componentes e hooks
npm run preview  # Preview local do build de produção
```

## O que está implementado

- Página em português, responsiva, com identidade em magenta, turquesa e menta baseada na referência fornecida pelo cliente. Veja [a paleta](docs/BRAND-PALETTE.md) e [o quadro de cores](docs/brand-palette.svg).
- Catálogo com 120 animais reais, 121 fotos dos posts e abas: 14 buscam um lar nas fontes, 9 têm situação a confirmar e 97 têm adoção anunciada. Filtros de espécie, porte, nome/apelido e favoritos, com carregamento de mais oito perfis por vez.
- Favoritos persistidos no navegador, com tratamento para armazenamento indisponível ou inválido.
- Perfis em diálogos nativos, com fechamento por Escape, contenção de foco e retorno ao botão de origem.
- Checklist interativo para refletir sobre a adoção responsável.
- Questionário de adoção com link direto para o Google Forms fornecido pelo cliente.
- Instagram do projeto, perfil da responsável e localização em Porto Alegre, RS.
- Chave Pix fornecida pelo cliente, com botão para copiar e alternativa de cópia manual.
- Apresentação do projeto, etapas da adoção, doações, lar temporário, voluntariado e dúvidas frequentes.
- Menu mobile, navegação por âncoras, redução de movimento, fontes locais e fotos locais.

## Conteúdo e integrações pendentes

Esta entrega é uma interface, sem backend. A galeria usa fotos e relatos reais extraídos dos 141 posts e 228 imagens fornecidos pelo cliente. As idades são as informadas nas publicações, com data explícita; dados ausentes não são inventados. A disponibilidade atual deve ser confirmada com o projeto. Animais já adotados não exibem o botão de candidatura no perfil. A adoção segue pelo Google Forms externo. A doação é feita pelo visitante no aplicativo bancário após copiar a chave Pix. O site não envia mensagens, não processa pagamentos e não captura dados pessoais.

Os posts com animais sem identificação individual, vídeos sem foto identificável, tratamentos sem liberação para adoção e campanhas foram documentados na [revisão de cada post](docs/instagram/REVIEW.md). Nove perfis têm conflitos entre legendas editadas e cartinhas de Natal e mostram uma ação para confirmar a situação, sem candidatura direta. O Google Forms redirecionou a verificação sem sessão para login; suas configurações de acesso permanecem sob controle do projeto.

## Organização

- `src/components/`: seções, navegação, galeria e diálogos.
- `src/data/pets.ts`: exportações do catálogo e perguntas frequentes.
- `src/data/rescue-catalog.ts`: catálogo real gerado a partir da curadoria.
- `docs/instagram/curation.json`: campos revisados por publicação.
- `docs/instagram/post-review.json`: decisão para cada um dos 141 posts.
- `docs/instagram/image-manifest.json`: origem, hash e recorte de cada foto.
- `scripts/import-instagram.py`: geração reproduzível do catálogo e das imagens (requer Python e Pillow).
- `src/data/project.ts`: Instagram, responsável, localização, chave Pix e questionário.
- `src/hooks/useFavorites.ts`: favoritos locais.
- `src/styles/tokens.css`: cores, fontes e medidas compartilhadas.
- `src/styles/global.css`: layout, componentes e regras responsivas.
- `src/styles/identity.css`: aplicação da identidade, molduras, faixas e componentes de contato.
- `public/images/`: fotografias locais.
- `docs/ASSETS.md`: origem das imagens e prompt do hero.
- `docs/BRAND-PALETTE.md`: cores em sRGB, usos e contrastes.

As imagens de referência originais em `docs/` foram preservadas.

## Atualizar o catálogo

Revise `docs/instagram/curation.json` e `post-review.json` antes de importar mudanças. O script rejeita posts novos, ausentes ou legendas alteradas até que sejam revisados. Não deduplica por aparência nem por nome normalizado: Limão/Limãozinho é a única união de posts aprovada. Romã/Roma e os dois Ártemis têm IDs separados.

```sh
python3 scripts/import-instagram.py
npx prettier --write src/data/rescue-catalog.ts docs/instagram
npm run build
```

A importação usa a pasta vizinha `../instagram_tool/downloads` por padrão. Pode receber outro caminho como argumento. Os arquivos gerados já estão no repositório; Python e os downloads não são necessários para rodar ou compilar o site.
