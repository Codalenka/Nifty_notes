import React, { Component } from 'react'
import { connect } from 'react-redux'
import addNote from '../actions/add-note'
import './CreateNote.sass'
import Checkbox from 'material-ui/Checkbox'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'


const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};


export class CreateNote extends Component {
  save(event) {
    event.preventDefault()


    const { addNote } = this.props

    const name = this.refs.name.value
    const category = this.refs.category.value
    const content = this.refs.content.value

    const newNote = {
      name: name,
      categoryId: categoryId,
      content: content,
    }
    addNote(newNote)

    this.refs.name.value = null
    this.refs.category.value = null
    this.refs.content.value = null
  }




  render() {
    const { categories } = this.props

    const categorynumber1 = categories.filter((category) => {
      return categories[0]
    })[0]

    const categorynumber2 = categories.filter((category) => {
      return categories[1]
    })[1]

    const categorynumber3 = categories.filter((category) => {
      return categories[2]
    })[2]

    const categorynumber4 = categories.filter((category) => {
      return categories[3]
    })[3]



    return (
      <form className="create-note" onSubmit={ this.save.bind(this) }>
        <div className="input">
          <input id="noteName" type="text" name="name" ref="name" placeholder= "Name"/>


          { categories[0] ?
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
              <RadioButton
                value="1"
                label={ categorynumber1.name }
                style={styles.radioButton}
                ref="categoryId"
              />
            </RadioButtonGroup> : null }

          { categories[1] ?
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
              <RadioButton
                value="light"
                label={ categorynumber2.name }
                style={styles.radioButton}
              />
            </RadioButtonGroup> : null }

          { categories[2] ?
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
              <RadioButton
                value="light"
                label={ categorynumber3.name }
                style={styles.radioButton}
              />
            </RadioButtonGroup> : null }

          { categories[3] ?
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
              <RadioButton
                value="light"
                label={ categorynumber4.name }
                style={styles.radioButton}
              />
            </RadioButtonGroup> : null }

            <textarea id="noteContent" type="text" name="content" ref="content" placeholder= "Write your note here"/>
            <input id="createNote" type="submit" value="Create Note" />
        </div>
      </form>
    )
  }
}


const mapStateToProps = (state) => {
  return {
      categories: state.categories
  }
}


export default connect(mapStateToProps, { addNote })(CreateNote)
