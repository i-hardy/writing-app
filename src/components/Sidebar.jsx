/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Aside from './styled/Aside';
import List from './styled/List';
import Folder from './Folder';

const GET_PROJECT = gql`
  {
    project(projectID: "7e911920-8a3c-11e9-9356-c1e825123dbb") {
      name
      draft {
        folders {
          folderID
          name
          documents {
            documentID
            title
          }
        }
      }
      notes {
        folders {
          folderID
          name
          documents {
            documentID
            title
          }
        }
      }
    }
  }
`;

function Sidebar({ onDocumentPick, selectedDocument }) {
  return (
    <Aside>
      <Query query={GET_PROJECT}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <div>
              <ContentEditable
                css={{ margin: 0, fontWeight: 500 }}
                className="editable"
                tagName="h4"
                html={data.project.name}
                onChange={() => {}}
              />
              <List
                css={{
                  borderTop: '1px solid var(--imperial-blue)',
                }}
              >
                <h4>Draft:</h4>
                {data.project.draft.folders.map(folder => (
                  <Folder
                    folder={folder}
                    key={folder.folderID}
                    onFolderChange={() => {}}
                    onDocumentPick={onDocumentPick}
                    selectedDocument={selectedDocument}
                  />
                ))}
              </List>
              <List
                css={{
                  borderTop: '1px solid var(--imperial-blue)',
                }}
              >
                <h4>Notes:</h4>
                {data.project.notes.folders.map(folder => (
                  <Folder
                    folder={folder}
                    key={folder.folderID}
                    onFolderChange={() => {}}
                    onDocumentPick={onDocumentPick}
                    selectedDocument={selectedDocument}
                  />
                ))}
              </List>
            </div>
          );
        }}
      </Query>
    </Aside>
  );
}

Sidebar.defaultProps = {
  selectedDocument: '',
};

Sidebar.propTypes = {
  onDocumentPick: PropTypes.func.isRequired,
  selectedDocument: PropTypes.string,
};

export default Sidebar;
