import React, { Component, PropTypes } from 'react'
import deleteCategory from '../actions/delete-category'
import { connect } from 'react-redux'
import { Link } from 'react-router'


  class Category extends Component {

    deleteMe() {
      const { categoryId, deleteCategory } = this.props
      deleteCategory(categoryId)
    }


   render() {
     const { categoryId, name } = this.props
    //  var notes = this.props.Notesboard.notes

     return(
       <div className="category">
          <Link className="categoryshow" to={ `/categories/${categoryId}` }>{ name }</Link>
            <button className="delete" onClick={ this.deleteMe.bind(this) }>x</button>
       </div>
     )
   }
 }

// Category.propTypes = {
//    name: PropTypes.string.isRequired,
//
//  }

export default connect(null, { deleteCategory })(Category)
