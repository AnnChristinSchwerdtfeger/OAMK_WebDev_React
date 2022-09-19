import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import modules from './modules.js'
import Item from './Item';
import { v4 as uuid } from 'uuid';

const MyList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const names = ['Vanessa','Ann','Ju','Nithin'];
    setItems(names);
    console.log(items)
  },[])

  return(
    <div id='list'>
      <h3>The Gang</h3>
      <ul>
        {items.map(item => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )

}

const AnotherList = () =>{

  const [item, setItem] = useState([])

  useEffect(() => {
    const shoppingList = Array();
    shoppingList.push(new Item('Coffe',1));
    shoppingList.push(new Item('Apple',3));
    shoppingList.push(new Item('Banana',5));
    setItem(shoppingList)

  }, [])
  
  return (
    <div>
      <h2>Shopping List</h2>
      <table>
        <head>
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </head>
        <tbody>
          {item.map( i => (
            <tr key={uuid()}>
              <td>{i.name}</td>
              <td>{i.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}

const Time = () => {

const [time, setTime] = useState(new Date())
useEffect(() => {
  const id = setInterval(()=>{
    setTime(new Date())
  },1000)

  return () => {
    clearInterval(id)
  }   
}, [])


  return(
    <div>
      <h3>The Time is </h3>
      <p>{time.toLocaleTimeString()}</p>
    </div>
    
  )
}

function App() {
  return (
    <div id='container'>
      <Time/>
      <Time/>
      <Time/>
      <MyList/>
      <AnotherList/>

    </div>
  );
}

export default App;
