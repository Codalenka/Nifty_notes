import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Note from '../components/Note'
import Category from '../components/Category'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CreateNote from '../components/CreateNote'
import CreateCategory from '../components/CreateCategory'
import './Noteboard.sass'


export class Notesboard extends React.Component {
  renderNote(note, index) {
    return <Note key={ index } { ...note } />
  }
  renderCategory(category, index) {
    return <Category key={ index } { ...category } />
  }
  render() {
    const { notes, categories }= this.props


    return (
      <div className="notesboard">
          <ul className="notes">
              { notes.map(this.renderNote) }
              <p> Add your note: </p>
            <CreateNote />
          </ul>
          <ul className="categories">
              { categories.map(this.renderCategory) }
              <p> Add your category: </p>
            <CreateCategory />
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
