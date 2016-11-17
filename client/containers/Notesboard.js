import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Note from '../components/Note'
import Category from '../components/Category'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import './Noteboard.sass'


export class Notesboard extends React.Component {
  renderNote(note, index) {
    return <Note key={ index } { ...note } />
  }

  render() {
    const { notes, categories }= this.props


    return (
      <div className="notesboard">
          <ul className="notes">
              { notes.map(this.renderNote) }
          </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    categories: state.categories,
  }
}

export default connect(mapStateToProps, {})(Notesboard)
