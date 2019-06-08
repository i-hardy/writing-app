import React, { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import Document from './Document';

function Folder({ folder, onFolderChange, onDocumentPick }) {
  const [open, setOpen] = useState(false);
  const icon = open ? faFolderOpen : faFolder;

  function onNameChange({ value }) {
    onFolderChange({ ...folder, name: value })
  }

  function onDocumentChange({ documents }) {
    onFolderChange({ ...folder, documents })
  }

  function addDocument() {
    onDocumentChange({ documents: [...folder.documents, 'New document'] })
  }

  return (
    <li className="folder">
      <FontAwesomeIcon icon={icon} onClick={() => setOpen(!open)} />
      <ContentEditable className="editable" tagName="h3" html={folder.name} onChange={({ target }) => onNameChange(target)} />
      {open && <ul className="documents">
        {folder.documents.map(
          (document) => 
            <Document documentName={document.name} key={document.id} onClick={() => onDocumentPick(document.id)} />)
        }
        <li>
          <button onClick={addDocument}>Add document</button>
        </li>
        </ul>
      }
    </li>
  )
}

export default Folder;