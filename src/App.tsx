import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import FeaturesPage from "./components/pages/features/FeaturesPage";
import TrendingPage from "./components/pages/trending/TrendingPage";
import ContactsPage from "./components/pages/contacts/ContactsPage";
import SignUpPage from "./components/pages/sign/SignUpPage";
import PricingPage from "./components/pages/pricing/PricingPage";


function App() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/signin" element={<SignUpPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          {/* Other routes go here */}
        </Routes>
      </HashRouter>
    );
  }

export default App;
