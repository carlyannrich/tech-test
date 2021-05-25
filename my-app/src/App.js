import React, { useState } from 'react';

import Header from './components/Header/index';
import InputForm from './components/InputForm/index';
import ResultBox from './components/ResultBox/index';
import imgSrc from './assets/logo.png';
import './App.css';

function App() {
  // setting state
  const [input, setInput] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  // const [short, setShort] = useState('');

  // send long to api, receive back short.

  // temporary value for short
  const short = 'https://example.ly';

  const handleOnClick = (event) => {
    event.preventDefault();
    setButtonClicked(true);
  };

  // copy to clipboard
  const copyToClipboard = () => {
    // only works on input field, how to get to with MUI? https://stackoverflow.com/questions/63546951/react-copy-to-clipboard-using-useref-hook
  };

  return (
    <div>
      <Header
        title="Jisc University URL Shortener"
        imgSrc={imgSrc}
        altText="Jisc University logo"
      />
      <InputForm
        inputPlaceholder="www.example.jiscuniversity.com"
        buttonText="Shorten this URL"
        onSubmit={(event) => handleOnClick(event)}
        value={input}
        onChange={(event) => setInput(event.target.value)}
        // eslint-disable-next-line no-useless-escape
        regexURL="^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
        onClick={() => handleOnClick()}
        label="Enter Long URL here"
        helperText="Please use University URLs with the structure: jiscuniversity.com"
      />
      {buttonClicked && (
      <ResultBox
        labelText="Shortened URL"
        buttonText="Copy"
        value={short}
        onClick={copyToClipboard}
      />
      )}

    </div>
  );
}

export default App;
