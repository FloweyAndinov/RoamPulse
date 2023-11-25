import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import { ReactComponent as TypescriptLogo } from './assets/typescript.svg';
import { ReactComponent as ScssLogo } from './assets/scss.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import { Header } from './components/header/header';
import { NavbarComp } from './components/navbar/navbarcomp';


function App() {
    const [count, setCount] = useState(0);

    return (
       <div>
      <NavbarComp/>
      <Header/>
       </div>
    );
}

export default App;
