import React, { useEffect, useState } from "react";
import { Route, useNavigate, Routes } from "react-router-dom";

import Layout from './components/shared/Layout'
// import Loader from './components/shared/Loader'

import Home from "../screens/Home";
import About from '../screens/About'
import CampaignDetail from "./screens/CampaignDetail";
import CampaignByCategory from "./screens/CampaignsByCategory";

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

          <Switch>
              
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/campaigns/:slug">
              <CampaignDetail posts={posts} tags={tags} categories={categories} users={users} getPostsMethod={getPostsByCategory} />
            </Route>

            <Route path="/categories/:name">
              <CampaignsByCategory posts={posts} tags={tags} categories={categories} users={users} getPostsMethod={getPostsByCategory} />
            </Route>
              
          </Switch>

        </Layout>
        
      :

        <Loader finishLoading={() => setIsMounted(true)} id="app-loader" />
              
      }

    </div>

  );
}

export default App;
