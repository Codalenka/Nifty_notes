import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Note from '../components/Note'
import Category from '../components/Category'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CreateNote from '../components/CreateNote'


export class Notesboard extends React.Component {
  renderNote(note, index) {
    return <Note key={ index } { ...note } />
  }
  render() {
    const { notes }= this.props


    return (
      <div className="notesboard">
        <CreateNote />
        <ul>
         { notes.map(this.renderNote) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, {})(Notesboard)
