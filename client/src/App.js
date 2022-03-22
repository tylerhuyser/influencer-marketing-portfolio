import React, { useEffect, useState } from "react";
import { Route, useNavigate, Routes } from "react-router-dom";

import Layout from './components/shared/Layout'
// import Loader from './components/shared/Loader'

import Home from './screens/Home'
import About from './screens/About'
import CampaignDetail from './screens/CampaignDetail';
import CampaignsByCategory from './screens/CampaignsByCategory';

import './App.css';

function App() {

  const [loaded, setLoaded] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  const location = window.location

  const isHome = location.pathname === '/';

  // useEffect(() => {
  //   if (6 === 6) {
  //     console.log('App.jsx - UseEffect #XX - App.js LOADED')
  //     setLoaded(true)
  //   }
  // }, [])

  return (
    <div className="app-container">

      {loaded && isMounted ?
            
        <Layout location={location} loaded={loaded} isMounted={isMounted} isHome={isHome} >

          <Routes>
              
            <Route exact path="/"
              element={<Home />}
            />

            <Route path="/about"
              element={<About />}
            />

            <Route path="/campaigns/:slug"
              element={<CampaignDetail />}
            />

            <Route path="/categories/:name"
              element={<CampaignsByCategory/>}
              />
              
          </Routes>

        </Layout>
        
      :

        // <Loader finishLoading={() => setIsMounted(true)} id="app-loader" />
              
        <p>LOADING</p>

      }

    </div>

  );
}

export default App;
