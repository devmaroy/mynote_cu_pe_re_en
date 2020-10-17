import React from 'react';

export default class AddNote extends React.Component {
    state = {
        error: undefined
    };

    handleAddNote = () => {
        const note = this.refs.note.value.trim();
        const error = this.props.handleAddNote( note );

        this.setState( () => ( { error } ) ); 

        if ( ! error ) {
            this.refs.note.value = '';
        }
    };

    handleOnSubmit = ( e ) => {
        e.preventDefault();
        this.handleAddNote();
    }

    handleOnEnterPress = ( e ) => {
        if ( e.keyCode == 13 && e.shiftKey == false ) { 
            e.preventDefault();
            this.handleAddNote();
        } 
    }

    render() {
        return (
            <div className="add-note">
                
                <form className="add-note-form" onSubmit={ this.handleOnSubmit }>
                    <textarea 
                        className="add-note-form__textarea"
                        rows="8"
                        onKeyDown={ this.handleOnEnterPress } 
                        ref="note" 
                        name="note"
                        autoFocus
                        >
                    </textarea>
                    <div className="add-note-form-meta">
                        <p className="add-note-form-error">{ this.state.error }</p>
                        <button className="button add-note-form__button" type="submit">Add Note</button>
                    </div>
                </form>
            </div>
        );
    }
}