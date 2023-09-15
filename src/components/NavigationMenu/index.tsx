import style from './styles.module.css';

import iconMenu from '../../images/Group 273.svg';

export default function NavigateMenu() {
  return (
    <nav className={ style.MainNavigate }>
        <ul>
            <li><a href="">Mais recentes</a></li>
            <li><a href="">Release</a></li>
            <li><a href="">Notícia</a></li>
            <li><a href="">Favoritas</a></li>
        </ul>
        <img src={ iconMenu } alt="" />
    </nav>
  )
}
