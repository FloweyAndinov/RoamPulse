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
import { OurJourney } from './components/our-journey/our-journey';
import TopDestinations from './components/top-destinations/top-destinations';
import { CommunityReactions } from './components/community-reactions/community-reactions';
import { Footer } from './components/footer/footer';


function App() {
   

    const [count, setCount] = useState(0);

    return (
       <div>
      <NavbarComp/>
      <Header/>
      <Features/>
      <OurJourney/>
      <TopDestinations/>
      <CommunityReactions/>
      <Footer/>
       </div>
    );
}

export default App;
