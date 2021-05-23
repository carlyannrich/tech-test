import './App.css';
import React from 'react';

import Header from './components/Header/index';
import InputForm from './components/InputForm/index';
import ResultBox from './components/ResultBox/index';
import imgSrc from './assets/logo.png';

function App() {
  return (
    <div>
      <Header
        title="Jisc University URL Shortener"
        imgSrc={imgSrc}
        altText="Jisc University logo"
      />
      <InputForm
        labelText="Enter the URL:"
        inputPlaceholder="www.example.jiscuniversity.com"
        buttonText="Shorten this URL"
      />
      <ResultBox
        labelText="Shortened URL:"
        buttonText="Copy"
      />
    </div>
  );
}

export default App;
