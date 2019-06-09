/** @jsx jsx */
import { Global, jsx } from '@emotion/core';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Sidebar from './components/Sidebar';
import Header from './components/styled/Header';
import MainContainer from './components/styled/MainContainer';
import globalStyles from './globalStyles';
import 'react-quill/dist/quill.snow.css';

const GET_DOCUMENT = gql`
  query Document($selectedDocument: ID!) {
    document(documentID: $selectedDocument) {
      text
    }
  }
`;

function App() {
  const [selectedDocument, setSelectedDocument] = useState('');

  function setDocument(id) {
    setSelectedDocument(id);
  }

  // function setDocumentText(text, delta, source) {}

  return (
    <MainContainer>
      <Global styles={globalStyles} />
      <Header />
      <Sidebar onDocumentPick={setDocument} selectedDocument={selectedDocument} />
      <Query query={GET_DOCUMENT} variables={{ selectedDocument }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <ReactQuill
              css={{ gridArea: 'editor' }}
              value={data.document.text}
              onChange={() => {}}
            />
          );
        }}
      </Query>
    </MainContainer>
  );
}

export default App;
