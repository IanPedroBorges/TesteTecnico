export const tratedDataTime = (data: string) => {
    const dataPublicacao = data;
    const partesDaData = dataPublicacao.split(" ");
    const dataFormatada = partesDaData[0].split("/").reverse().join("-") + "T" + partesDaData[1] + "Z";
    const dataMaisRecente = new Date(dataFormatada);
    const dataAtual = new Date();
    const diferencaEmMilissegundos = Number(dataAtual) - Number(dataMaisRecente);
    const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

    return diferencaEmDias;
}