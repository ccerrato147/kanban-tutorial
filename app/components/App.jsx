import 'array.prototype.findindex';
import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.storeChanged = this.storeChanged.bind(this);
    this.state = NoteStore.getState();
  }
  componentDidMount() {
    NoteStore.listen(this.storeChanged);
  }
  componentWillUnmount() {
    NoteStore.unlisten(this.storeChanged);
  }
  storeChanged(state) {
    // Without proper `bind`, `this` wouldn't
    // point at the right context (defaults to `window`
    // in browser environment)
    this.setState(state);
  }
	render() {
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes items={this.state.notes} onEdit={this.editNote} onDelete={this.deleteNote} />
      </div>
    );
  }
  addNote() {
    NoteActions.create({task: 'New task'});
  }
  editNote(id, task) {
    NoteActions.update({id, task});
  }
  deleteNote(id) {
    NoteActions.delete(id);
  }
}