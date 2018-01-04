import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import * as bs from 'react-bootstrap/lib/'

export const App = (props) =>
      <div>
        <ul>
          {props.aList.map(item => <li key={item}>{item}</li>)}
        </ul>
        <bs.Button onClick={e => props.addItem()}>
          Add to list
        </bs.Button>
      </div>


export default App;