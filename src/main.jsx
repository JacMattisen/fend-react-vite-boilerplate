import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./index.css";
import App from './App';
import About from './About';

ReactDOM.render(
 <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={App} />
      <Route path="/about" component={About} />
    </div>
 </BrowserRouter>,
 document.getElementById('root')
);
