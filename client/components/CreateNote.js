import React, { Component } from 'react'
import { connect } from 'react-redux'
import addNote from '../actions/add-note'
import './CreateNote.sass'

export class CreateNote extends Component {
  save(event) {
    event.preventDefault()


    // let name = this.refs.name.value
    const { addNote } = this.props

    const name = this.refs.name.value
    const category = this.refs.category.value
    const content = this.refs.content.value

    const newNote = {
      name: name,
      category: category,
      content: content,
    }
    addNote(newNote)

    this.refs.name.value = null
    this.refs.category.value = null
    this.refs.content.value = null
  }

  render() {
    return (
      <form className="create-note" onSubmit={ this.save.bind(this) }>
        <div className="input">
          <input id="noteName" type="text" name="name" ref="name" placeholder= "Name"/>
          <input id="noteCategory" type="text" name="category" ref="category" placeholder= "category" />
          <textarea id="noteContent" type="text" name="content" ref="content" placeholder= "Write your note here"/>
          <input id="createNote" type="submit" value="Create Note" />
        </div>
      </form>
    )
  }
}

export default connect(null, { addNote })(CreateNote)
