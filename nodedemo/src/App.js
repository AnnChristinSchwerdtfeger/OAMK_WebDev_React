import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';

//declaring backend adress
const URL = 'http://localhost:3002/'

function App() {
  const [message, setMessage] = useState('')
  const [text, setText] = useState('')
  const [foo, setFoo] = useState('')

  const [persons, setpersons] = useState([])
  const [newName, setnewName] = useState('')


  useEffect(() => {
    //make axios call to retrieve data
    axios.get(URL)
      .then((response)=>{
        console.log("data from route / :" , response.data)
        setpersons(response.data)
        console.log(persons)
      }).catch(err => {
        setMessage(err)
      })
  }, [])


/* #note1
  useEffect(() => {
    //make axios call to retrieve data
    axios.get(URL)
      .then((response)=>{
        setMessage(response.data.message) //its always 'response.data.message' when using axios
        window.setTimeout(()=>{
          setText(response.data.text)
          setFoo(response.data.foo)
        },2000)
      }).catch(err => {
        setMessage(err)
      })
  }, [])
*/

  const save = (e) =>{
    e.preventDefault()
    const json = JSON.stringify({name: newName})
    console.log("json: "  ,json)
    console.log(URL+ 'new',json)
    axios.post(URL+ 'new',json,{
      headers:{
        'Content-type' : 'application/json'
      }
    }).then((response) => {
      setpersons(persons => [...persons,response.data])
      setnewName('')
    }).catch(err => {
      alert(err)
    })
  }

  return (
    <div>
      <h3>This message was retrieved from NodeJS server</h3>
      <form onSubmit={save}>
        <input value={newName} onChange={e => setnewName(e.target.value)} />
        <button>Save</button>
      </form>
      <ul>
        {persons.map(p => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
