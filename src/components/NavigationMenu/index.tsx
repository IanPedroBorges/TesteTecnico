import style from './styles.module.css';

import iconMenu from '../../images/Group 273.svg';

export default function NavigateMenu() {
  return (
    <nav className={ style.MainNavigate }>
        <ul>
            <li><button>Mais recentes</button></li>
            <li><button>Release</button></li>
            <li><button>Notícia</button></li>
            <li><button>Favoritas</button></li>
        </ul>
        <img src={ iconMenu } alt="" />
    </nav>
  )
}
