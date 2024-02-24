import React from 'react';
import {BrowserRouter, Routes} from "react-router-dom";
import Header from "./components/page-elements/Header";
import {Route} from "react-router";
import {PATH_HOME, PATH_PRODUCT} from "./config/links";
import HomePage from "./components/pages/HomePage";
import ProductPage from "./components/pages/ProductPage";
import './App.css';

function App() {
    return (<div className={'page-container'}>
            <div className={'content-wrap'}>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path={PATH_HOME} element={<HomePage/>}/>
                        <Route path={PATH_PRODUCT} element={<ProductPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
