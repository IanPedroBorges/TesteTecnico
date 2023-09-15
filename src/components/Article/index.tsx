import { useContext } from "react";
import { ApiContext } from "../../context/apicontext/apiContext";

import { tratedDataTime } from "../../utils/recentDataTrated";

import style from './styles.module.css';

import imgNoFavorite from '../../images/Vector.svg';


function Article() {
  const { primaryNotice } = useContext(ApiContext);
  if(primaryNotice.length !== 0) {
  console.log(primaryNotice)
  const diferencaEmDias = tratedDataTime(primaryNotice[0].data_publicacao)
  return (
    <article className={ style.mainNoticeDiv }>
      <img src={`https://agenciadenoticias.ibge.gov.br/${primaryNotice[0].imagens.image_intro}`} alt={'Ibge Image'} />
      <aside>
        <div>
          <h3>Notícia mais recente</h3>
          <img src={ imgNoFavorite } alt="" />
        </div>
        <h2>{primaryNotice[0].titulo}</h2>
        <p>{primaryNotice[0].introducao}</p>
        <div>
          <p>{`${diferencaEmDias} dias atras`}</p>
          <a href={primaryNotice[0].link}>Leia a notícia aqui</a>
        </div>
      </aside>
    </article>
  );
}
}

export default Article;
