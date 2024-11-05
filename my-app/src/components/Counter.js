import {useState} from 'react'

function Counter() {
    const[count,setCount]=useState(0);
    const Artır=()=>{
        setCount(count+1)
     };
  return (
    <div>
     <h1>{count}</h1>
     <button onClick={Artır}>Artır</button>
     <button onClick={()=>setCount(count-1)}>Azalt</button>
    </div>
  )
}

export default Counter
