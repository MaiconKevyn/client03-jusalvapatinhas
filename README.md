# Ju Salva Patinhas

Interface para o projeto independente Ju Salva Patinhas, de resgate, reabilitação e adoção de cães e gatos em Porto Alegre, RS. Desenvolvida com **Astro 7, React 19 e TypeScript**, com páginas geradas durante o build e interações no navegador. Node.js é usado apenas no desenvolvimento e no build; a hospedagem recebe HTML, CSS, JavaScript e imagens.

## Rodar localmente

Use Node.js 24 LTS, indicado em `.nvmrc` (mínimo suportado: 22.12).

```sh
npm ci
npm run dev
```

Abra http://localhost:5173. O servidor fica restrito à máquina local e usa uma porta fixa; se ela estiver ocupada, o servidor informa o conflito.

```sh
npm run check    # Validação de Astro e TypeScript
npm run build    # Validação e build estático de produção em dist/
npm run lint     # Revisão estática dos componentes e hooks
npm run preview  # Prévia local do build em http://localhost:4173
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

O site publicado não depende de um servidor Node.js nem possui endpoints de API. O catálogo vem de dados versionados; banco de dados, autenticação e painel administrativo não estão implementados. A galeria usa fotos e relatos reais extraídos dos 141 posts e 228 imagens fornecidos pelo cliente. As idades são as informadas nas publicações, com data explícita; dados ausentes não são inventados. A disponibilidade atual deve ser confirmada com o projeto. Animais já adotados não exibem o botão de candidatura no perfil. A adoção segue pelo Google Forms externo. A doação é feita pelo visitante no aplicativo bancário após copiar a chave Pix. O site não envia mensagens, não processa pagamentos e não captura dados pessoais.

Os posts com animais sem identificação individual, vídeos sem foto identificável, tratamentos sem liberação para adoção e campanhas foram documentados na [revisão de cada post](docs/instagram/REVIEW.md). Nove perfis têm conflitos entre legendas editadas e cartinhas de Natal e mostram uma ação para confirmar a situação, sem candidatura direta. O Google Forms redirecionou a verificação sem sessão para login; suas configurações de acesso permanecem sob controle do projeto.

## Organização

- `astro.config.mjs`: geração estática, domínio canônico e integração React.
- `src/pages/`: páginas geradas no build.
- `src/layouts/SiteLayout.astro`: documento HTML, metadados, fontes e estilos.
- `src/App.tsx`: interface React renderizada no build e hidratada no navegador.
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

## Publicação na Hostinger via GitHub

Use um **website PHP/HTML comum**, com a integração Git do hPanel. Código-fonte e site compilado ficam juntos na branch **`main`**. Não é necessário criar uma Web App Node.js.

O diretório `dist/` é versionado e contém o site pronto. O `.htaccess` da raiz direciona as requisições para esse diretório, de modo que o domínio abre o site e os caminhos do código-fonte não ficam acessíveis pela web. A hospedagem precisa processar `.htaccess` e regras de reescrita, como o ambiente PHP/HTML da Hostinger. Em outra hospedagem sem essas regras, configure a raiz pública diretamente para `dist/`.

### Configuração no hPanel

1. Aguarde o workflow **Prepare Hostinger on main** concluir no GitHub Actions.
2. Abra o website `jusalvapatinhas.umbrastudio.com.br` → **Advanced → Git → Continue with GitHub**.
3. Selecione o repositório `MaiconKevyn/client03-jusalvapatinhas`.
4. Selecione a branch **`main`** e o diretório de destino **`public_html`**.
5. Clique **Deploy**. Depois confira o status e a opção de implantação automática dessa branch.
6. Abra `https://jusalvapatinhas.umbrastudio.com.br` e confirme HTTPS, imagens, busca, favoritos, perfil de um animal e links de adoção/Instagram.

Não há comando de build ou start na Hostinger: ela recebe os arquivos prontos do GitHub. Não são necessários upload de ZIP, FTP nem credenciais da Hostinger no repositório. A antiga branch `hostinger` não é mais atualizada nem necessária para publicar; não a selecione no painel.

O `.htaccess` de `dist/` exige revalidação do HTML para evitar referências antigas aos arquivos compilados. A configuração da raiz impede que um eventual `default.php` substitua o site. O deploy Git pode substituir arquivos no diretório de destino; use o diretório dedicado a este website.

### Atualizações e recuperação

Edite o código ou o catálogo em `main`, execute `npm run build` e inclua `dist/` no mesmo commit. Isso entrega código e site atualizado juntos.

Como proteção para alterações feitas diretamente no GitHub, `.github/workflows/hostinger.yml` executa instalação, lint, formatação e build a cada push em `main`, usando Node.js 24. Se o build alterar `dist/`, o Actions cria um commit adicional na própria `main` com os arquivos compilados. Esse commit usa o `GITHUB_TOKEN` automático com permissão de escrita; ele não dispara outra execução do workflow. A branch nunca recebe force-push. Se houver um commit mais recente durante o build, o workflow deixa a atualização para a execução desse novo commit.

Com implantação automática ativada no hPanel, a Hostinger acompanha a `main`. Quando o build é feito pelo Actions, o conteúdo anterior pode permanecer publicado até o commit dos arquivos compilados ser implantado. Se qualquer validação falhar, o Actions não atualiza `dist/`; consulte os logs antes de publicar uma nova versão. O sucesso do workflow confirma a preparação do repositório, não a publicação no domínio.

Para recompilar sem mudar o código, execute **Run workflow** em `main`. Para recuperar uma versão, reverta a alteração correspondente em `main`, gere o build novamente e faça push. Use **Redeploy** no hPanel se a implantação automática estiver desativada.

A estrutura Astro e as interações React continuam disponíveis para melhorias. Banco de dados, autenticação e APIs próprias poderão ser adicionados quando houver necessidade concreta, com a hospedagem apropriada. Não existe servidor de aplicação em produção.

Referências: [publicação do Astro](https://docs.astro.build/en/guides/deploy/) e [deploy Git na Hostinger](https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/).
