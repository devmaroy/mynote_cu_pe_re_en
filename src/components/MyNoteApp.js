import React from 'react';
import Header from './Header';
import Notes from './Notes';
import AddNote from './AddNote';

export default class MyNoteApp extends React.Component {
    state = {
        notes: []
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem( 'notes' );
            const notes = JSON.parse( json );

            if ( notes ) {
                this.setState( () => ( { notes } ) );
            }
        } catch ( e ) {
            // Do nothing at all
        }
    };

    componentDidUpdate( prevProps, prevState ) {
        if ( prevState.notes.length !== this.state.notes.length ) {
            const json = JSON.stringify( this.state.notes );
            localStorage.setItem( 'notes', json );
        }
    };

    handleDeleteNotes = () => {
        this.setState(() => ({
            notes: []
        }));
    };

    handleDeleteNote = ( noteToRemove ) => {
        this.setState( ( prevState ) => ({
            notes: prevState.notes.filter( ( note ) => noteToRemove !== note )
        }));
    };

    handleAddNote = ( note ) => {
        if ( ! note ) {
            return 'Please enter valid note';
        } else if ( this.state.notes.indexOf( note ) > -1 ) {
            return 'This note already exist';
        }

        this.setState( ( prevState ) => ({ 
            notes: prevState.notes.concat( note ) 
        }));  
    };

    render() {
        const subtitle = 'Leave a note! ✍️';

        return (
            <div className="container">
                <Header subtitle={ subtitle } />
                <div className="app-body">
                    <AddNote handleAddNote={ this.handleAddNote } />
                    <Notes 
                        notes={ this.state.notes }
                        hasNotes={ this.state.notes.length > 0 } 
                        handleDeleteNotes={ this.handleDeleteNotes }
                        handleDeleteNote={ this.handleDeleteNote }
                    />
                </div>
            </div>
        );
    }
}


