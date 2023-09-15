export interface ApiResponse {
    count: number;
    page: number;
    totalPages: number;
    nextPage: number;
    previousPage: number;
    showingFrom: number;
    showingTo: number;
    items: ApiItem[];
  }
  
  export interface ApiItem {
    id: number;
    tipo: string;
    titulo: string;
    introducao: string;
    data_publicacao: string;
    produto_id: number;
    produtos: string;
    editorias: string;
    imagens: string;
    produtos_relacionados: string;
    destaque: boolean;
    link: string;
  }

  export interface ApiItemTrated {
    id: number;
    tipo: string;
    titulo: string;
    introducao: string;
    data_publicacao: string;
    produto_id: number;
    produtos: string;
    editorias: string;
    imagens: ApiImages;
    produtos_relacionados: string;
    destaque: boolean;
    link: string;
  }
  
  export interface ApiImages {
    image_intro: string;
    float_intro: string;
    image_intro_alt: string;
    image_intro_caption: string;
    image_fulltext: string;
    float_fulltext: string;
    image_fulltext_alt: string;
    image_fulltext_caption: string;
}
  