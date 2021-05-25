import './App.css';
import React from 'react';

import Header from './components/Header/index';
import InputForm from './components/InputForm/index';
import ResultBox from './components/ResultBox/index';
import imgSrc from './assets/logo.png';

function App() {
  // send longurl to api
  // recieve shortenedurl from api const getlink
  // setting state
  // const [input, setInput] = useState('');
  const short = 'https://example.ly';

  // handle submit (validation, send to api, receive shortenedURL and display ResultBox)

  return (
    <div>
      <Header
        title="Jisc University URL Shortener"
        imgSrc={imgSrc}
        altText="Jisc University logo"
      />
      <InputForm
        labelText="Enter Long URL"
        inputPlaceholder="www.example.jiscuniversity.com"
        buttonText="Shorten this URL"
      />
      <ResultBox
        labelText="Shortened URL"
        buttonText="Copy"
        value={short}
      />
    </div>
  );
}

export default App;
