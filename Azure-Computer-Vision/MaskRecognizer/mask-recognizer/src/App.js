import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import UploadPanel from './components/UploadPanel'
import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
function App() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Mask recognizer</Navbar.Brand>
      </Navbar>
    <UploadPanel />
  </React.Fragment>
  );
}

export default App;
