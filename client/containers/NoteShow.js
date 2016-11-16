import React, { Component } from 'react'
import { connect } from 'react-redux'
import appLoading from '../actions/loading'


export class NoteShow extends Component {

  render() {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    note: state.note
  }
}

export default connect(mapStateToProps, {})(NoteShow)
