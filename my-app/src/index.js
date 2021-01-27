import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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

function Hello() {
  return <h1>Hello Alireza.</h1>;
}

const el = <Hello />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
