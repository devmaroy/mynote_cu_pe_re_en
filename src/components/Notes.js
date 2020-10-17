import React from 'react';
import Note from './Note';

const Notes = ( props ) => (
    <div className="notes">
        <div className="notes-header">
            <h3 className="notes-header__title">Your Notes</h3>
            {
                props.hasNotes && (
                    <button
                        className="button button--link notes-header__button"
                        onClick={ props.handleDeleteNotes }
                    >
                        Remove All
                    </button>
                )
            }
        </div>

        { props.notes.length === 0 && <p className="notes__message">Please add a note to get started!</p> }

        {
            props.notes.map( ( note, index ) => (
                <Note 
                    key={ note }
                    noteText={ note }
                    count={ index + 1 }
                    handleDeleteNote={ props.handleDeleteNote }
                />
            ))
        }
    </div>
);

export default Notes;