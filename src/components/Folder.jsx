/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import List from './styled/List';
import Document from './Document';

const IconWrapper = styled.span`
  width: 18px;
  display: inline-block;
`;

function Folder({
  folder, onFolderChange, onDocumentPick, selectedDocument,
}) {
  const [open, setOpen] = useState(false);
  const icon = open ? faFolderOpen : faFolder;

  function onNameChange({ value }) {
    onFolderChange({ ...folder, name: value });
  }

  function onDocumentChange({ documents }) {
    onFolderChange({ ...folder, documents });
  }

  function addDocument() {
    onDocumentChange({ documents: [...folder.documents, { id: 'new' }] });
  }

  return (
    <li css={{ cursor: 'pointer' }}>
      <IconWrapper>
        <FontAwesomeIcon icon={icon} onClick={() => setOpen(!open)} />
      </IconWrapper>
      <ContentEditable
        className="editable"
        tagName="h5"
        css={{ margin: '0.5rem', display: 'inline-block', fontWeight: 500 }}
        html={folder.name}
        onChange={({ target }) => onNameChange(target)}
      />
      {open && (
        <List padding="1rem">
          {folder.documents.map(document => (
            <Document
              documentName={document.title}
              key={document.documentID}
              onClick={() => onDocumentPick(document.documentID)}
              isSelected={document.documentID === selectedDocument}
            />
          ))}
          <li>
            <button type="button" onClick={addDocument}>
              Add document
            </button>
          </li>
        </List>
      )}
    </li>
  );
}

Folder.defaultProps = {
  selectedDocument: '',
};

Folder.propTypes = {
  folder: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    documents: PropTypes.array,
  }).isRequired,
  onFolderChange: PropTypes.func.isRequired,
  onDocumentPick: PropTypes.func.isRequired,
  selectedDocument: PropTypes.string,
};

export default Folder;
