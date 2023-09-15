import { ApiItemTrated, ApiResponse } from "../types/types.apiRertun";

export const apiResponse = async () => {
    try {
        const response = await fetch("https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100");
    const data:ApiResponse = await response.json();
    const trated:ApiItemTrated[] = data.items.map((item) => {
        const imagens = JSON.parse(item.imagens);
        return {
            ...item,
            imagens
        }
    })
    return trated;
    } catch (error) {
        console.log(error);
        return [];
    }
}