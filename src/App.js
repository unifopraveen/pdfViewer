import React,{useState } from 'react';
import PdfViewer from './components/PdfViewer.js';
import Header from './components/Header.js';
import Controls from './components/Controls.js';
import './App.css';


function App() {

  const [zoom, setZoom] = useState(1);

  return (
    <div className="App">
      <Header/>
      <div className='pdf-container1'>
        <PdfViewer zoom={zoom}/>
        <Controls zoom={zoom} setZoom={setZoom}/>
      </div> 
    </div>
  );
}

export default App;
