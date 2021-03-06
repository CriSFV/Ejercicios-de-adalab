import '../styles/App.scss';
import logo from '../images/logo-adalab.jpg';

function App() {
  return (
    <div>
      <header className='header'>
        <a href='https://adalab.es/' rel='noreferrer' target='_BLANK'>
          <img className='logo' src={logo} alt='logo adalab' title='Adalab' />
        </a>
        <nav>
          <ul className='menu'>
            <li className='menu__line'>
              <a
                className='link'
                href='https://adalab.es/blog/'
                rel='noreferrer'
                target='_BLANK'
              >
                Blog
              </a>
            </li>
            <li className='menu__line'>
              <a
                className='link'
                href='https://adalab.es/contacto/'
                rel='noreferrer'
                target='_BLANK'
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='principal'>
        <h1 className='principal__text'>Creando diversidad digital</h1>
      </main>
    </div>
  );
}

export default App;
