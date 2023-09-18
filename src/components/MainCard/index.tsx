import { useContext, useState } from "react";
import { ApiContext } from "../../context/apicontext/apiContext";

import iconNoFavorite from "../../images/Vector.svg";
import iconFavorite from "../../images/Group 270.svg";

import styles from "./styles.module.css";
import { useControlCards } from "../../hooks/useControlCards";
import { tratedDataTime } from "../../utils/recentDataTrated";

export default function MainCard() {
  const [numberPages, setNumberPages] = useState<number>(9);
  const { storageControlVerification } = useControlCards();
  const { recentData, storage, renderization } = useContext(ApiContext);

  return (
    <main className={renderization ? styles.MainCard : styles.MainCardCol}>
      {recentData.map(
        (item, index) =>
          index < numberPages && (
            <div key={item.titulo} className={styles.cardContainer}>
              <img
                className={renderization ? styles.img : styles.imgCol}
                src={`https://agenciadenoticias.ibge.gov.br/${item.imagens.image_intro}`}
                alt={`Imagem mostrando o conteuudo do seguinte titulo: ${item.titulo}`}
              />
              <article>
                <h2>{item.titulo}</h2>
                <p>{item.introducao}</p>
                <div>
                  <p>
                    {tratedDataTime(item.data_publicacao) < 1
                      ? "Hoje"
                      : `${tratedDataTime(item.data_publicacao)} dias atras `}
                  </p>
                  <a href={item.link}>Leia a noticia aqui</a>
                </div>
              </article>
              <img
                onClick={() => storageControlVerification(item)}
                src={storage.includes(item) ? iconFavorite : iconNoFavorite}
                alt=""
                style={{ cursor: "pointer" }}
              />
            </div>
          )
      )}
      <button onClick={() => setNumberPages(numberPages + 9)}>
        Mais Noticias
      </button>
    </main>
  );
}
