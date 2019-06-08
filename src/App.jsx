/** @jsx jsx */
import { Global, jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import globalStyles from './globalStyles';
import 'react-quill/dist/quill.snow.css';

const folders = [
  { id: '1', name: 'Chapter 1', documents: [] },
  {
    id: '2',
    name: 'Chapter 2',
    documents: [
      { id: '4af1ed95-60dd-4563-9a88-193640d6794b', name: 'First scene' },
      { id: '43ec6087-74ed-452f-aa7c-33e83237d060', name: 'Second scene' },
    ],
  },
];
let documents = [
  { id: '4af1ed95-60dd-4563-9a88-193640d6794b', name: 'First scene', text: '<p>Hello!</p>' },
  { id: '43ec6087-74ed-452f-aa7c-33e83237d060', name: 'Second scene', text: '' },
];

function App() {
  const [selectedDocument, setSelectedDocument] = useState(documents[0]);

  function setDocument(id) {
    setSelectedDocument(documents.find(doc => doc.id === id));
  }

  useEffect(() => {
    documents = documents.map((doc) => {
      if (doc.id === selectedDocument.id) {
        return selectedDocument;
      }
      return doc;
    });
  }, [selectedDocument]);

  function setDocumentText(text, delta, source) {
    if (source === 'user') {
      setSelectedDocument(Object.assign({}, selectedDocument, { text }));
    }
  }

  return (
    <div
      css={{
        flex: 1,
        width: '100%',
        display: 'grid',
        gridTemplateAreas: '"header header" "sidebar editor"',
        gridTemplateColumns: '1fr 3fr',
        gridTemplateRows: '50px 1fr',
      }}
    >
      <Global styles={globalStyles} />
      <Header />
      <Sidebar
        projectName="My First Project"
        projectFolders={folders}
        onDocumentPick={setDocument}
        selectedDocument={selectedDocument.id}
      />
      <ReactQuill
        css={{ gridArea: 'editor' }}
        value={selectedDocument.text}
        onChange={setDocumentText}
      />
    </div>
  );
}

export default App;
