import React, { Component } from 'react'
import { connect } from 'react-redux'
import appLoading from '../actions/loading'


export class NoteShow extends Component {
  componentWillMount() {
    this.props.apploading(true)
  }

  componentDidMount() {
    const { appLoading, routeParams } = this.props
  }
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
