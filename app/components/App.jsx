import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

const notes = [
  {
    id: uuid.v4(),
    task: 'Learn Webpack'
  },
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry'
  }
];

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
    this.addNote = this.addNote.bind(this);
  }
	render() {
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes items={this.state.notes} onEdit={this.editNote} />
      </div>
    );
  }
  addNote() {
    this.setState({
      notes:this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New Task'
      }])
    });
  }
  editNote(noteId, task) {
    console.log('note edited', noteId, task);
  }
}