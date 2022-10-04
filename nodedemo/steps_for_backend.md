# HowTo Start server backend

1. create server folder
2. cd server
    - npm init -y
    - npm i express
    - npm i --save-dev nodemon
    - In server/package.json add ->   
    ```
        {
        "name": "server",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
    ------->"devStart" : "nodemon index.js",
            "test": "echo \"Error: no test specified\" && exit 1"
        },
    ```           
    - in folder server define: *index.js* file

index.js should look like:
```

    const express = require('express')
    const app = express()
    const port = 3001

    app.get("/",(req,res)=>{
        res.status(200).json({message:"Node Server responding and running"})
    })

    app.listen(port,() => {
        console.log(`server is running on port ${port}` )
    })
```

3. create frontend: 
        - (new terminal) In the root folder run ***npm start***
        - (new terminal) install axios library in the frontend: ***npm i axios***

4. In *App.js* :
        - we want to retrieve data from to backend. For that we have to define where to find the backend:

        ```
            import './App.css';
            import {useState,useEffect} from 'react';
            import axios from 'axios';

            //declaring backend adress
            const URL = 'http://localhost:3001/ '

            function App() {
            const [message, setMessage] = useState('')

            useEffect(() => {
                //make axios call to retrieve data
                axios.get(URL)
                .then((response)=>{
                    setMessage(response.data.message) //its always 'response.data.message' when using axios
                }).catch(err => {
                    setMessage(err)
                })
            }, [])
            

            return (
                <div className="App">
                <h3>This message was retrieved from NodeJS server</h3>
                <p>{message}</p>
                </div>
            );
            }

            export default App;

        ```
    -> this will throw a cors error: 
    
    >[!NOTE] 
    >
    >By default it is not possible to call 3000 frontend from the 3001 backend. To allow that we need cors. this will allow it. We can also set other constraints of who is allowed to call certain sites of the backend with cors.

5. in Server folder: ***npm i cors***
6. In index.js add:
    ````
        const cors = require('cors')
        app.use(cors)
    ````

