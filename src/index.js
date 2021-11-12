import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/style.css'
// document.addEventListener('contextmenu',event=>{
//   event.preventDefault()
// })
// window.onresize = function(){
//   if((window.outerHeight-window.innerHeight)>10)
//     debugger
//  }
// document.onkeydown = function(e) {
//   if(e.keyCode === 123) {
//     return false;
//   }
//   if(e.ctrlKey && e.keyCode === 'E'.charCodeAt(0)){
//     return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)){
//     return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)){
//     return false;
//   }
//   if(e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)){
//     return false;
//   }
//   if(e.ctrlKey && e.keyCode === 'S'.charCodeAt(0)){
//   return false;
//   }
//   if(e.ctrlKey && e.keyCode === 'H'.charCodeAt(0)){
//     return false;
//   }
//   if(e.ctrlKey && e.keyCode === 'A'.charCodeAt(0)){
//     return false;
//   }
//   if(e.ctrlKey && e.keyCode === 'F'.charCodeAt(0)){
//     return false;
//   }
//   if(e.ctrlKey && e.keyCode === 'E'.charCodeAt(0)){
//     return false;
//   }
// }


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
