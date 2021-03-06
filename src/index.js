import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,BrowserRouter,Routes,Route,Link,NavLink } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Home() {
  return(
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

function Topics() {
  return(
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  )
}

function Contact() {
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function App() {
  return(
    <div>
      <h1>Hello React Router Dom</h1>
      <ul>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
      {/* <ul>
        <li><link to='/'>HOME</link></li>
        <li><link to='/topics'>Topics</link></li>
        <li><link to='/contact'>Contact</link></li>
      </ul> */}
      {/* <ul>
        <li><a href='/'>HOME</a></li>
        <li><a href='/topics'>Topics</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/topics" element={<Topics />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/*" element={"not found"} >not found</Route>
      </Routes>
    </div>
  );
}

// ReactDOM.render(<App />,document.getElementById('root'));
// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));
ReactDOM.render(<HashRouter><App /></HashRouter>,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
