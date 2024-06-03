import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Menubar from './Component/menu';
import Firstsection from './Component/First';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slidersection from './Component/Slidersection';
import Features from './Component/feature';
import Aboutus from './Component/About';
import Proffestional from './Component/Proffesional';
import Service from './Component/Services';
import Clients from './Component/Client';
import Contacts from './Component/Contact';
import Info from './Component/Information';
import Footor from './Component/Last';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Firstsection/>
   <Menubar/>
   <Slidersection/>
   <Features/>
    <Aboutus/>
    <Proffestional/>
    <Service/>
    <Clients/>
    <Contacts/>
    <Info/>
    <Footor/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
