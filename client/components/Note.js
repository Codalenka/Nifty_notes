import React, { Component, PropTypes } from 'react'
import deleteNote from '../actions/delete-note'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './Note.sass'


export class Note extends Component {

    deleteMe() {
      const { noteId, deleteNote } = this.props
      deleteNote(noteId)
    }

   render() {
     const { noteId, name, category, content } = this.props


     return(
       <div className="note">
        <div className="label">
          <button className="delete" onClick={ this.deleteMe.bind(this) }>x</button>
          <Link className="noteshow" to={ `/notes/${noteId}` }>{ name }</Link>
          <div className="category"> Category: { category }</div>
          <div className="content">Content: { content }</div>
        </div>
       </div>
     )
   }
 }


export default connect(null, { deleteNote })(Note)
