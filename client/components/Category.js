import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


  class Category extends Component {
   render() {
     const { category } = this.props
    //  var notes = this.props.Notesboard.notes

     return(
       <div className="category">
          <h4> These are the categories </h4>
       </div>
     )
   }
 }

// Category.propTypes = {
//    name: PropTypes.string.isRequired,
//
//  }

export default Category
