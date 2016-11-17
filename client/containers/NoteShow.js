import React, { Component } from 'react'
import { connect } from 'react-redux'
import appLoading from '../actions/loading'
import Title from '../components/Title'


export class NoteShow extends Component {

  // this.props.routeParams.noteId


componentDidMount() {
   const { noteId } = this.props.routeParams.noteId
 }

    render() {
      // const { routeParams } = this.props
      const { notes, routeParams } = this.props
      const currentNote = notes.filter((note) => {
        debugger
        return note.noteId === parseInt(routeParams.noteId)
      })[0]
      // routeParams.noteId
        // if (this.props.note) {
        //   const { name } = this.props.note

          return (
          <div className="note-show">
            <Title label= { currentNote.name } />
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
