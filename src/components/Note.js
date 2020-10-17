import React from 'react';

const Note = ( props ) => (
    <div className="note">
        <p className="note__text">{ props.count }. { props.noteText }</p>
        <button
            className="button--link"
            onClick={( e ) => {
                props.handleDeleteNote( props.noteText );
            }}
        >
            Remove
        </button>
    </div>
);

export default Note;