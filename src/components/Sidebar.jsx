/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';
import Folder from './Folder';

function Sidebar({
  projectName, projectFolders, onDocumentPick, selectedDocument,
}) {
  const [localProjectName, setName] = useState(projectName);
  const [folders, setFolders] = useState(projectFolders);

  function setFolderInternals({ id, name, documents }) {
    setFolders(
      folders.map((folder) => {
        if (folder.id === id) {
          return { id, name, documents };
        }
        return folder;
      }),
    );
  }

  return (
    <aside
      css={{
        padding: '1rem',
        gridArea: 'sidebar',
        backgroundColor: 'var(--isabelline)',
      }}
    >
      <ContentEditable
        css={{ margin: 0 }}
        className="editable"
        tagName="h2"
        html={localProjectName}
        onChange={({ target }) => setName(target.value)}
      />
      <ul
        css={{
          borderTop: '1px solid var(--imperial-blue)',
          paddingLeft: 0,
          listStyle: 'none',
        }}
      >
        {folders.map(folder => (
          <Folder
            folder={folder}
            key={folder.id}
            onFolderChange={setFolderInternals}
            onDocumentPick={onDocumentPick}
            selectedDocument={selectedDocument}
          />
        ))}
      </ul>
    </aside>
  );
}

Sidebar.defaultProps = {
  projectName: '',
  selectedDocument: '',
};

Sidebar.propTypes = {
  projectName: PropTypes.string,
  projectFolders: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDocumentPick: PropTypes.func.isRequired,
  selectedDocument: PropTypes.string,
};

export default Sidebar;
