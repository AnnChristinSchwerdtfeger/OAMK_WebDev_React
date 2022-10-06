import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3001/';

function App() {
  const [task, setTask] = useState([])
  const [taskDescrp, setTaskDescrp] = useState('')

  function save(){
    const json = JSON.stringify({description:taskDescrp})
    axios.post(URL+'new',json,{
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then((response)=>{
      const addedObject = JSON.parse(json)
      addedObject.id = response.data.id
      setTask(task => [...task,addedObject])
      setTaskDescrp('')
    }).catch(error => {
      alert(error.response.data.error)
    })
  }

  function remove(id){
    axios.delete(`${URL}delete/${id}`)
    .then(()=>{
      const newListWithoutRemoved = task.filter((item) => item.id !==id)
      setTask(newListWithoutRemoved)
    }).catch(error => {
      alert(error.response.data.err)
    })
  }


  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      setTask(response.data.result) 
      console.log('response: ', response.data.result);
    }).catch(err => {
      alert(err.response.data.error)
    })
  }, [])

  return (
    <div>
      <h3>
        Shopping list
      </h3>
      <form>
        <label>Add</label>
        <input onChange={e => setTaskDescrp(e.target.value)} />
        <button type='button' onClick={save}>Save</button>
      </form>
      <ol>
        {task.map(t=>(
          <li key={t.id}>{t.description} <a href='#' onClick={()=> remove(t.id)}>delete</a></li>
        ))}
      </ol>

    </div>
  );
}

export default App;
