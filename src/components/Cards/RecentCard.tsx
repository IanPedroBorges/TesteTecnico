import { useContext } from "react"
import { ApiContext } from "../../context/apicontext/apiContext"
import { tratedDataTime } from "../../utils/recentDataTrated"

import iconFavorite from '../../images/Vector.svg'

import style from './styles.module.css'

export default function RecentCard() {
    const { recentData } = useContext(ApiContext)
  return (
    <>
        {
            recentData.map((item, index) => {
                return (
                    index < 9 &&
                    <div key={index} className={ style.CardContainer }>
                        <h2>{item.titulo}</h2>
                        <p>{item.introducao}</p>
                    <div>
                        <p>{tratedDataTime(item.data_publicacao)}</p>
                        <a href="">Leia a noticia aqui</a>
                    </div>
                    <img src={ iconFavorite } alt="" />
                    </div>
                )
            }   )
        }
    </>
  )
}
