import { useState,useEffect } from 'react'
import './App.css'
import Clock from './components/Clock'

function App() {
  console.log("App component rendered");

  return <Clock />;
}

export default Clock;
