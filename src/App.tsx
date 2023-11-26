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
import Card from './components/card/card';
import { v4 as uuidv4 } from 'uuid';
import Features from './components/features/features';

function App() {
   

    const [count, setCount] = useState(0);

    return (
       <div>
      <NavbarComp/>
      <Header/>
      <Features/>
      
       </div>
    );
}

export default App;
