import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const Name = ['Anwar','Jafor','Alomgir','Salman','Sakib','Bappi']
  const Jobs = ['IT Head',"IT Assistant","Network Operator"]
  const products=[
    {name:'Photoshop',price:"$99.99"},
    {name:'Illustrator',price:'$60.69'},
    {name: 'PDF Reader', price:'$5.49'},
    {name: 'Microsoft Office', price:'$10.99'},
    {name: 'Primer pro', price:'$1000'}
]
  return (
    <div className="App">
      <header className='App-header'>
      <p>I am a React Person</p>

      <Counter></Counter>
      <Users></Users>

      <ul>
        {
          Name.map(names=><li>{names}</li>)
        }
        {
          products.map(product=> <li>{product.name}</li> )
        }
      </ul>

      {
        products.map(pd=><Product product={pd} ></Product>)
      }
      <Person name="Munna" job="IT Head"></Person>
      <Person name={Name[0]} job={Jobs[2]}></Person>
      <Person></Person>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count:{count} </h1>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
  )
}
  function Users(){
    const [users,setUsers]= useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=> res.json())
      .then(data=>setUsers(data));
    },[])
    
    return(
      <div>
        <h3>Dynamic Users: {users.length}</h3>
        <ul>
          {
            users.map(user=><li>{user.name}</li>)
          }
        </ul>
      </div>
    )
  }

  function Product(props1){
    const productStyle ={
      border: "1px solid gray",
      borderRadius:"5px",
      backgroundColor:'lightgray',
      height: '250px',
      width: '300px',
      float: 'left',
      margin:'5px'
    }
    const {name,price}= props1.product;
    return(
      <div style={productStyle}>
        <h3> {name} </h3>
        <h3> {price} </h3>
        <button>Buy Now</button>
      </div>
    )
  }

  function Person(props){
    const personStyle = {
      color: 'gray',
      border: '3px solid gold',
      borderRadius:'10px',
      width: '400px',
      margin: '10px',
    }
    return(
      <div style={personStyle}>
        <h3>Name: {props.name} </h3>
        <p>Profession: {props.job} </p>
      </div>
    )
  }

export default App;
