import React, { Component } from 'react'
import { connect } from 'react-redux'
import appLoading from '../actions/loading'
import Title from '../components/Title'
import { browserHistory } from 'react-router'
import Note from '../components/Note'
import Categorysidebar from './Categorysidebar'
import CreateNote from '../components/CreateNote'
import { Link } from 'react-router'





export class CategoryShow extends Component {

  componentDidMount() {
     const { categoryId } = this.props.routeParams.categoryId
   }

   renderNote(note, index) {
     return <Note key={ index } { ...note } />
   }

    render() {
      // filter out category with same categoryId
      const { categories, routeParams } = this.props
      const currentCategory = categories.filter((category) => {
        return category.categoryId === parseInt(routeParams.categoryId)
      })[0]
      //Only return 1 result

      // filter out the notes that belong to this category
      const { notes } = this.props
      const categoryNotes = notes.filter((note) => {
        return note.categoryId === currentCategory.categoryId
      })



          return (
          <div className="category-show">
              <Title label= { currentCategory.name } />
              <ul className="notes">
                  { categoryNotes.map(this.renderNote) }
                  <p> Add your note: </p>
                  <CreateNote />
              </ul>
              <div>
                <Categorysidebar />
              </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    notes: state.notes,
  }
}

export default connect(mapStateToProps, {})(CategoryShow)
