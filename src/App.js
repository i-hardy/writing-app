import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import Sidebar from './Sidebar';
import './App.css';
import 'react-quill/dist/quill.snow.css';

const folders = [
  { id: 1, name: 'Chapter 1', documents: [] },
  { id: 2, name: 'Chapter 2', documents: [
      { id: '4af1ed95-60dd-4563-9a88-193640d6794b', name: 'First scene' },
      { id: '43ec6087-74ed-452f-aa7c-33e83237d060', name: 'Second scene' },
    ]
  }
];
const documents = [
  { id: '4af1ed95-60dd-4563-9a88-193640d6794b', name: 'First scene', text: '' },
  { id: '43ec6087-74ed-452f-aa7c-33e83237d060', name: 'Second scene', text: '' },
];


function App() {
  const [selectedDocument, setSelectedDocument] = useState(documents[0]);

  function setDocument(id) {    
    setSelectedDocument(documents.find((doc) => doc.id === id));
  }

  function setDocumentText(text) {
    console.log(text);
    
    documents.find((doc) => doc.id === selectedDocument.id).text = text;
  }

  return (
    <div className="App">
      <header className="header">
      </header>
      <Sidebar projectName="My First Project" projectFolders={folders} onDocumentPick={setDocument} />
      <ReactQuill value={selectedDocument.text} onChange={setDocumentText} />
    </div>
  );
}

export default App;
