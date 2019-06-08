import React from 'react';
// import ContentEditable from 'react-contenteditable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';


function Document({ documentName, onClick }) {
  // const [name, setName] = useState(documentName);
  return (
    <li className="document" onClick={onClick}>
      <FontAwesomeIcon icon={faFileAlt} />
      <span>{documentName}</span>
    </li>
  )
}

export default Document;
