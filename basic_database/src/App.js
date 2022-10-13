import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3001/';

function App() {
  const [task, setTask] = useState([])
  const [taskDescrp, setTaskDescrp] = useState('')
  const [editTask, setEditTask] = useState(null)
  const [editDescription, setEditDescription] = useState('')

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

  function setEditableRow(task) {
    setEditTask(task)
    setEditDescription(task.description)
  }

  function edit(){
    const json = JSON.stringify({id: editTask.id, description: editDescription})
    axios.put(URL + 'edit',json,{
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then((response)=>{
      const editedObject = JSON.parse(json)
      const tempArray = [...task]
      const index = tempArray.findIndex(task => {return editTask.id})
      if(index !==-1 ) tempArray[index].description = editDescription
      setTask(tempArray)

      setEditTask(null)
      setEditDescription('')
    }).catch(error => {
      alert(error.response.data.error)
    })
  }


  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      setTask(response.data)
      console.log(response.data) 
    }).catch(err => {
      alert(err.response.data.error)
    })
  }, [])

  return (
    <div>
      <h3>
        Shopping list
      </h3>
      <ol>
        {task.map(t=>(
          <li key={t.id}>
            {
            editTask?.id !== t.id && t.description + ' '
            }
            {
              editTask?.id === t.id &&
                <form>
                  <input value={editDescription} onChange={e => setEditDescription(e.target.value)} />
                  <button type='button' onClick={edit}>Save</button>
                  <button type='button' onClick={() => setEditTask(null)}>Cancel</button>
                </form>
            }
            <a href='#' onClick={() => remove(t.id)}>Delete</a>&nbsp;
            {
              editTask === null && 
                <a href='#' onClick={() => setEditableRow(t)}>Edit</a>
            } 
          </li>
        ))}
      </ol>

    </div>
  );
}

export default App;
