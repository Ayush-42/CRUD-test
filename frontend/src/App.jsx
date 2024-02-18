import App, { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AutoCompleteEmails from './option'
import UserList from './userList'

//export default function App({setCount, fun}) {
export default function App1() {

  const [count, setCount] = useState(0)
  const [fun1, setFun] = useState()

  // let navigate = useNavigate()
  const fun = () => {
   let f = 19
   setCount(10)
  //  navigate(-1)
  }


  useEffect(()=>{

  },[count])
  const functionPrimar = async () => {
  getFetchList(parms)
    .then((res)=>{
      console.log(res, '----------res')
      let value = res?.part1
      getFetchList1(value)
        .te
    })
    .catch((error)=>{
      console.log(error, '--------')
    })
    .finally()

    try{
      let fun = await getFetchList(parms)
      let value = fun?.part1
      let fun1 = await getFetchList1(value)
    }catch(err){
      console.log(err, '-------------')
    } 


  }


  return (
    <>
      <div>
        {console.log(`coutn is ${count}`)}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* {
        inline style={{}};
        class
      } */}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <AutoCompleteEmails />

        <h1>Your MongoDB User Data</h1>
      <UserList />
    </>
  )
}

// function App1() {

// } 

{/* export default App */}
