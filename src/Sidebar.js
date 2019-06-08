import React, { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import Folder from './Folder';
import './Sidebar.css';

function Sidebar({ projectName, projectFolders, onDocumentPick }) {
  const [name, setName] = useState(projectName);
  const [folders, setFolders] = useState(projectFolders);

  function setFolderInternals({ id, name, documents }) {
    setFolders(folders.map((folder) => {
      if (folder.id === id) {
        return { id, name, documents }
      };
      return folder;
    }))
  }

  return (
    <aside className="sidebar">
      <ContentEditable className="editable" tagName="h2" html={name} onChange={({ target }) => setName(target.value)} />
      <ul className="folders">
        {folders.map((folder) =>
          <Folder folder={folder} key={folder.id} onFolderChange={setFolderInternals} onDocumentPick={onDocumentPick} />
        )}
      </ul>
    </aside>
  )
}

export default Sidebar;
