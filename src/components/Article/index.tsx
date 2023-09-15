import { useContext } from "react";
import { ApiContext } from "../../context/apicontext/apiContext";

import { tratedDataTime } from "../../utils/recentDataTrated";

import style from './styles.module.css';

import imgNoFavorite from '../../images/Vector.svg';


function Article() {
  const { data } = useContext(ApiContext);
  if(data.length !== 0) {
  const recentData = data.sort((a, b) => Number(a.data_publicacao) - Number(b.data_publicacao));
  console.log(data)
  const diferencaEmDias = tratedDataTime(recentData[0].data_publicacao)
  return (
    <article className={ style.mainNoticeDiv }>
      <img src={`https://agenciadenoticias.ibge.gov.br/${data[0].imagens.image_intro}`} alt={'Ibge Image'} />
      <aside>
        <div>
          <h3>Notícia mais recente</h3>
          <img src={ imgNoFavorite } alt="" />
        </div>
        <h2>{recentData[0].titulo}</h2>
        <p>{recentData[0].introducao}</p>
        <div>
          <p>{`${diferencaEmDias} dias atras`}</p>
          <a href={recentData[0].link}>Leia a notícia aqui</a>
        </div>
      </aside>
    </article>
  );
}
}

export default Article;
