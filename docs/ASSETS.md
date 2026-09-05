# Imagens e direção visual

A identidade atual segue a referência de magenta, turquesa e menta fornecida pelo cliente, preservada em `identity-reference.png`. A paleta, os contrastes e sua aplicação estão em [BRAND-PALETTE.md](BRAND-PALETTE.md). As notas abaixo documentam as fotografias e as referências estruturais da primeira versão.

## Referências fornecidas

As seis imagens JPG nesta pasta orientam a composição. A referência PawJoy foi a principal influência para a paleta creme/sálvia/coral e a tipografia editorial. As outras referências contribuíram com recortes orgânicos, detalhes de patinhas, fotografias de cães e gatos e uma navegação clara. Nenhuma página foi usada como uma imagem de fundo da interface.

## Hero original

- Arquivo usado pelo site: `public/images/hero-pets.png`.
- Criado com a ferramenta integrada imagegen, em 4 de setembro de 2026.
- Fotografia gerada para fins ilustrativos; não retrata animais reais da ONG.
- O original gerado foi copiado para o projeto, sem depender de caminhos externos.

Prompt final:

> Use case: photorealistic-natural. Asset type: hero artwork for a warm Brazilian animal rescue and adoption website. Create a landscape 3:2 studio editorial photograph of a happy caramel mixed-breed rescue dog with floppy ears sitting next to a small gray-brown tabby cat. Both face the camera, close together affectionately, whole bodies and paws visible, with the dog slightly behind the cat. The dog wears a simple muted sage-green cotton bandana. Off-white warm cream seamless studio background, soft natural daylight, detailed realistic fur, gentle grounded shadows. Subjects fill the middle 80% of the image and bottom two thirds, leaving small breathing room above their ears. Warm, sincere, charming, sophisticated pet campaign photography. No text, logos, borders, graphics, props, people or watermark. The animals must look natural, not illustrated or plastic.

## Fotos reais do catálogo

A galeria usa 121 fotografias de 120 animais, extraídas dos posts fornecidos em `umbra-studios/instagram_tool/downloads`. Revisamos as 228 imagens e as 141 legendas, incluindo textos nas cartinhas de Natal. As fotos estão em `public/images/resgatados/`, em WebP, com aproximadamente 8,6 MiB no total. A extração removeu as molduras dos posts; nenhuma imagem de animal foi gerada ou retocada por IA. Os originais permanecem intactos nos downloads.

[Manifesto de imagens](instagram/image-manifest.json): cada arquivo de origem, hash SHA-256, recorte e saída. [Revisão completa](instagram/REVIEW.md): decisão sobre cada publicação. Os seis perfis fictícios foram substituídos integralmente.

## Fotografias ilustrativas da primeira versão

Imagens do Unsplash armazenadas localmente para não depender de downloads externos durante a navegação. As seis fotos de demonstração da galeria foram retiradas de uso. A seção institucional ainda usa `our-story.jpg`, identificada como ilustrativa no texto alternativo. O hero também permanece ilustrativo. Nenhuma dessas imagens representa um perfil de adoção real.

| Arquivo         | Origem                                                       |
| --------------- | ------------------------------------------------------------ |
| `bento.jpg`     | https://images.unsplash.com/photo-1552053831-71594a27632d    |
| `luna.jpg`      | https://images.unsplash.com/photo-1573865526739-10659fec78a5 |
| `mel.jpg`       | https://images.unsplash.com/photo-1543466835-00a7907e9de1    |
| `chico.jpg`     | https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba |
| `theo.jpg`      | https://images.unsplash.com/photo-1587300003388-59208cc962cb |
| `nina.jpg`      | https://images.unsplash.com/photo-1495360010541-f48722b34f7d |
| `our-story.jpg` | https://images.unsplash.com/photo-1450778869180-41d0601e046e |

## Tipografia e ícones

Fraunces para títulos e DM Sans para o texto, instaladas via Fontsource e servidas localmente. Ícones Lucide React; marca provisória construída com tipografia e o ícone de patinha. As licenças das dependências estão nos respectivos pacotes.
