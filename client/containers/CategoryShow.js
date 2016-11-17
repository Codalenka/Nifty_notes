import React, { Component } from 'react'
import { connect } from 'react-redux'
import appLoading from '../actions/loading'
import Title from '../components/Title'


export class CategoryShow extends Component {

      // const { routeParams } = this.props

    //   this.getParams().id
    // `notes/${routeParams.noteId}`)
    //   .then((noteId) => {
          // this.props.routeParams.noteId


    render() {
        // if (this.props.note) {
        //   const { name } = this.props.note

          return (
          <div className="category-show">
              <Title label="Category show" />
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    note: state.category
  }
}

export default connect(mapStateToProps, {})(CategoryShow)
