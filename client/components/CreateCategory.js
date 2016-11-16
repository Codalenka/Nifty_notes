import React, { Component } from 'react'
import { connect } from 'react-redux'
import addCategory from '../actions/add-category'
import './CreateCategory.sass'

export class CreateCategory extends Component {
  save(event) {
    event.preventDefault()


    // let name = this.refs.name.value
    const { addCategory } = this.props

    const name = this.refs.name.value

    const newCategory = {
      name: name,
    }
    addCategory(newCategory)

    this.refs.name.value = null
  }

  render() {
    return (
      <form className="create-category" onSubmit={ this.save.bind(this) }>
        <div className="input">
          <input id="categoryName" type="text" name="name" ref="name" placeholder= "Name"/>
          <input id="createCategory" type="submit" value="Create Category" />
        </div>
      </form>
    )
  }
}

export default connect(null, { addCategory })(CreateCategory)
