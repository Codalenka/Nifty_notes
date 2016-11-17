import React, { Component } from 'react'
import { connect } from 'react-redux'
import appLoading from '../actions/loading'
import Title from '../components/Title'
import { browserHistory } from 'react-router'


export class NoteShow extends Component {


componentDidMount() {
   const { noteId } = this.props.routeParams.noteId
 }

    render() {
      // filter out note with same noteId
      const { notes, routeParams } = this.props
      const currentNote = notes.filter((note) => {
        return note.noteId === parseInt(routeParams.noteId)
      })[0]
      //Only return 1 result

          return (
          <div className="note-show">
            <Title label= { currentNote.name } />
            <p> Category: { currentNote.category } </p>
            <p> { currentNote.content } </p>
            <button onClick={ browserHistory.goBack }>Back</button>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, {})(NoteShow)
