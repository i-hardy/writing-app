/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import Document from './Document';

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
      <FontAwesomeIcon css={{ width: '18px' }} icon={icon} onClick={() => setOpen(!open)} />
      <ContentEditable
        className="editable"
        tagName="h3"
        css={{ margin: '0.5rem', display: 'inline-block' }}
        html={folder.name}
        onChange={({ target }) => onNameChange(target)}
      />
      {open && (
        <ul
          css={{
            paddingLeft: '1rem',
            listStyle: 'none',
          }}
        >
          {folder.documents.map(document => (
            <Document
              documentName={document.name}
              key={document.id}
              onClick={() => onDocumentPick(document.id)}
              isSelected={document.id === selectedDocument}
            />
          ))}
          <li>
            <button type="button" onClick={addDocument}>
              Add document
            </button>
          </li>
        </ul>
      )}
    </li>
  );
}

Folder.defaultProps = {
  selectedDocument: '',
};

Folder.propTypes = {
  folder: PropTypes.objectOf({ id: PropTypes.string, name: PropTypes.string }).isRequired,
  onFolderChange: PropTypes.func.isRequired,
  onDocumentPick: PropTypes.func.isRequired,
  selectedDocument: PropTypes.string,
};

export default Folder;
