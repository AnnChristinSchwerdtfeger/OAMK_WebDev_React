import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';

const URL_Jokes = "https://api.jokes.one/jod"

const Joke = () =>{
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    axios.get(URL_Jokes)
      .then((response) => {
        //console.log(response)
        const joke = response.data.contents.jokes[0].joke
        setTitle(joke.title)
        setText(joke.text)
      }).catch(e => console.log(e))
  }, [])
  

  return(
    <>
      <h4>{title}</h4>
      <p>{text}</p>
    </>
  )
}


const ExchangeRate = () =>{
  const [eur, setEur] = useState(0);
  const [gbp, setGbp] = useState(0);
  const [rate, setRate] = useState(0);

  const API_KEY = '911b3806a1cbe40dacf96b52c007b3f3';
  const URL_EX = 'http://api.exchangeratesapi.io/v1/latest?access_key=';

  async function calc(){
    try{
      const address = URL_EX + API_KEY;
      const response = await fetch(address);
  
      if (response.ok){
        const data = await response.json();
        console.log(data)
        setRate(data.rates.GBP);

        setGbp(eur * data.rates.GBP);
      }else{
        alert('Error retrieving exchange rate')
        console.log(response)
      }
    } catch (err){
      console.log(err)
    }
  }

  const checkKeyDown = (e) => {
    if (e.code === 'Enter'){
      e.preventDefault();
      calc();
    } 
  };


return(
  <div id='container'>
    <form> 
      <div>
        <label>Euro</label>
        <input type='number' step='0.01' value={eur} onChange={e => setEur(e.target.value)} onKeyDown={(e) => checkKeyDown(e)}></input>
        <output>  Rate: {rate}</output>
      </div>
      <div>
        <label>GBP</label>
        <output>{gbp.toFixed(2)} €</output>
      </div>
    </form>
    <button onClick={calc}>Calc</button>
  </div>
)
}

const Geolocation = () =>{

}

function App() {
  return (
    <div >
      <h1>Excercise 1: jokes</h1>
      <h3>Joke of the day</h3>
      <Joke/>
      <hr></hr>
      <br></br>
      <h1>Excercise 2: Exchange Rates</h1>
      <ExchangeRate/>
      <hr></hr>
      <br></br>
      <h1>Excercise 3: Geolocation</h1>
      <Geolocation/>
    </div>
  );
}

export default App;
