import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

import { createBrowserRouter , RouterProvider , Router } from 'react-router-dom';
import Home from './components/pages/home/Home';
import FeaturesPage from "./components/pages/features/FeaturesPage";
import TrendingPage from "./components/pages/trending/TrendingPage";
import PricingPage from "src/components/pages/pricing/Pricing";
import ContactsPage from "./components/pages/contacts/ContactsPage";
import SignUpPage from "./components/pages/sign/SignUpPage";


function App() {
   

    const router = createBrowserRouter([
        {
            path : "/",
            element :  <>
                <Home/>
             </>
        },
        {
            path : "/features",
            element : <>
            <FeaturesPage/>
            </>
        },
        {
            path : "/trending",
            element : <>
            <TrendingPage/>
            </>
        },
        {
            path : "/pricing",
            element : <>
            <PricingPage/>
            </>
        },
        {
            path : "/contacts",
            element : <>
            <ContactsPage/>
            </>
        },
        {
            path : "/signin",
            element : <>
            <SignUpPage/>
            </>
        }
    ])

    return (
      <RouterProvider router={router}/>
    );
}

export default App;
