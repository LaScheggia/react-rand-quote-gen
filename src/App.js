import React, {useState, useEffect} from "react";

import Quote from "./Components/Quote";

function App() {
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null
  }); 

  const fetchQuote = async () => {
    return await fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json());
  }


  const generate = async () => {
    setQuote(await fetchQuote());
  }

  useEffect(async() => {
    setQuote(await fetchQuote());
  }, []);

  return (
    <div className="App">
      <Quote quote={quote}/>
      <button onClick={generate}>
        Pick New quote
      </button>

    </div>
  );
}

export default App;
