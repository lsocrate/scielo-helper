export var documentType = [
  {
    id: 'abstract',
    description: 'resumo - uma apresentação precisa e resumida de uma obra sem agregar interpretação ou crítica, acompanhado de uma referência bibliográfica da obra original.'
  },
  {
    id: 'announcement',
    description: 'exposição ou declaração relevante que pode ou não ter relação com o artigo publicado.'
  },
  {
    id: 'article-commentary',
    description: 'comentários - uma nota crítica ou esclarecedora, escrita para discutir, apoiar ou debater um artigo ou outra apresentação anteriormente publicada. Pode ser um artigo, carta, editorial, etc. Estas publicações podem aparecer como comentário, comentário editorial, ponto de vista, etc.'
  },
  {
    id: 'book-review',
    description: 'resenha - análise críticas de livros e outras monografias.'
  },
  {
    id: 'brief-report',
    description: 'comunicação breve sobre resultados de uma pesquisa.'
  },
  {
    id: 'case-report',
    description: 'relato, descrição ou estudo de caso - pesquisas especiais que despertam interesse informativo.'
  },
  {
    id: 'correction',
    description: 'errata - corrige erros apresentados em artigos após sua publicação online/impressa.'
  },
  {
    id: 'editorial',
    description: 'editorial - uma declaração de opiniões, crenças e políticas do editor de uma revista, geralmente sobre assuntos de significado científico de interesse da comunidade científica ou da sociedade.'
  },
  {
    id: 'in-brief',
    description: 'press release - comunicação breve de linguagem jornalística sobre um artigo ou tema.'
  },
  {
    id: 'letter',
    description: 'cartas - comunicação entre pessoas ou instituições através de cartas. Geralmente comentando um trabalho publicado'
  },
  {
    id: 'other',
    description: 'Outro tipo de documento. Pode ser considerado adendo, anexo, discussão, artigo de preocupação, introdução entre outros.'
  },
  {
    id: 'rapid-communication',
    description: 'comunicação breve sobre atualização de investigação ou outra notícia.'
  },
  {
    id: 'reply',
    description: 'resposta a carta ou ao comentário, geralmente é usado pelo autor original fazendo outros comentários a respeito dos comentários anteriores'
  },
  {
    id: 'research-article',
    description: 'artigo original - abrange pesquisas, experiências clínicas ou cirúrgicas ou outras contribuições originais.'
  },
  {
    id: 'retraction',
    description: 'retratação - a retratação de um artigo científico é um instrumento para corrigir o registro acadêmico publicado equivocadamente, por plágio, por exemplo.'
  },
  {
    id: 'review-article',
    description: 'são avaliações críticas sistematizadas da literatura sobre determinado assunto.'
  },
  {
    id: 'translation',
    description: 'tradução. Utilizado para artigos que apresentam tradução de um artigo produzido em idioma diferente.'
  }
]

import languageList from 'npm:language-list'
export var languages = languageList().getData()
