import  {useState} from "react";

function App() {
  const [name,setName]=useState("funda");
  const [age,setAge]=useState(30);
  const[count,setCount]=useState(2);
  const[friends,setFriends]=useState(["Elif","Hatice"])
  const[address,setAddress]=useState({title:"İstanbul",
    zip:53456,
  })
  return (
    <div className="App">
      <h1>Merhaba!{name}</h1>
      <h2>{age}</h2>
      <h3>{count}</h3>
      <button onClick={()=>setName("deniz")}>Change Name</button>
      <button onClick={()=>setAge(31)}>Change Age</button>
      <button onClick={()=>setCount(count+1)}>Change Count</button>
      <hr/>
      {
        friends.map((friend,index)=>(
          <div key={index}>{friend}</div>
         ))
      }
       <button onClick={()=>setFriends([...friends,"funda"])}>Add new count</button>
       <hr/>
       <br/><br/>
      <h2>Adress</h2>
      <div>{address.title} {address.zip}</div>
      <br/>
      <button onClick={()=>setAddress({...address,title:"Ankara",zip:44444})}>Add new adress</button>
    </div>
  );
}

export default App;
