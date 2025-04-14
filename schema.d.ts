// /schema.d.ts

export interface SchemaAPI {
  name: string; // Nome do esquema
  description: string; // Descrição do esquema
  length: number; // Tamanho do esquema
  primary: string; // Chave primária do esquema
  seed: number; // Semente para gerar dados ou algo relacionado
  info: boolean; // Flag de informação, pode ser algo como incluir metadados
  version: number; // Versão do esquema
  content: Content; // Objeto com a estrutura do conteúdo do esquema
}

export interface Content {
  name: string; // Nome do conteúdo
  email: EmailContent; // Objeto para o campo de email
}

export interface EmailContent {
  type: 'email'; // Tipo do campo, neste caso "email"
  domain: string; // Domínio do email
}
