import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


  class Category extends Component {
   render() {
     const { name } = this.props
    //  var notes = this.props.Notesboard.notes

     return(
       <div className="category">
          <div className="name"> { name }</div>
       </div>
     )
   }
 }

// Category.propTypes = {
//    name: PropTypes.string.isRequired,
//
//  }

export default Category
