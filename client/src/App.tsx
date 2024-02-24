import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/page-elements/Header";
import './App.css';

function App() {
  return (<div className={'page-container'}>
        <div className={'content-wrap'}>
          <BrowserRouter>
            <Header/>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
