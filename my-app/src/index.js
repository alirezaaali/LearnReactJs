import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <h1>Hello ReactJS</h1>,
//   document.getElementById('root')
// );

// const name = 'Alireza'
// const el = <p>Hello {name}</p>
// ReactDOM.render(el,document.getElementById('root'))

// let counter = 0;

// function show() {
//   counter++;
//   const el = <p>{counter}</p>;
//   ReactDOM.render(
//     el, document.getElementById('root')
//   );
// }

// setInterval(show, 1000); 

// function Hello() {
//   return <h1>Hello Alireza.</h1>;
// }

// const el = <Hello />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );


// function Hello(props) {
//   return <p>Hello, {props.name}!</p>;
// }

// const el = <Hello name="Alirezaa" />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );

// ---------------------------------------------------------
// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// function Frt() {
//   var fchos =  fruits[Math.floor(Math.random()*4)]; 
//   return <p>Your fruit is:{fchos}!</p>;
// }

// function Hello(props) {  
//   return <p>Hello, {props.name}!</p>;
// }

// let counter = 0;
// function Timer() {
//   counter++;
//   return <p>{counter}</p>;
// }

// function Zpp() {
//   return <div>
//     <Hello name="Alireza" />
//     <Frt />
//     <Timer/>
//   </div>;
// }


// function show(){
//   const el = <Zpp />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );
// }
// setInterval(show, 1000); 
// ---------------------------------------------------------


// function Item(props) {
//   return <div className="item">
//   <b>Name:</b> {props.name} <br />
//   <b>Price:</b> ${props.price}
//   </div>;
// }

// function Zpp() {
//   return <div>
//     <Item name="Cheese" price="4.99" />
//     <Item name="Bread" price="1.5" />
//     <Item name="Ice cream" price="24" />
//   </div>;
// }

// const el = <Zpp />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );
// -------------------------------------------------

// class Hello extends React.Component {
//   state = {
//     name: "Alireza",
//     family:"Ali",
//     age:"36"

//   }
//   render() {
//     return <div>
//     <h1>Firstname: {this.state.name}.</h1>
//     <h2>Familyname: {this.state.family}.</h2>
//     <h3>age {this.state.age}.</h3>
//     </div>;    
//   }
// }

// const el = <Hello />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );
// ---------------------------------------------------------
// class Counter extends React.Component{
//   state = {
//     counter:0
//   }
//   increment = () => {
//     this.setState({
//       counter: this.state.counter+1
//     });
//   }
//   decrement = () => {
//     this.setState({
//       counter:this.state.counter-1
//     });
//   }
//   render(){
//     return <div>
//       <p>{this.state.counter}</p>
//       <button onClick={this.increment}>Increment</button>
//       <button onClick={this.decrement}>decrement</button>
//     </div>
//   }
// }

// const el = <Counter />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );
// ------------------------------------------------------------
// function Hello() {
//   const [name,setName] = useState("Alireza");
//   const [family,setFamily] = useState("Ali");

//   return <h1>Hello {name} {family}</h1>
// }



// const el = <Hello />; 
// ReactDOM.render(
//   el, 
//   document.getElementById('root')
// );

// -----------------------------------------------------------







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
