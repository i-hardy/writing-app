/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

function Document({ documentName, onClick, isSelected }) {
  return (
    <li>
      <button
        type="button"
        css={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: isSelected ? 'red' : 'inherit',
        }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faFileAlt} />
        <span css={{ margin: '0.5rem', display: 'inline-block' }}>{documentName}</span>
      </button>
    </li>
  );
}

Document.defaultProps = {
  documentName: '',
  isSelected: false,
};

Document.propTypes = {
  documentName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

export default Document;
