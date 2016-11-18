import React, { Component } from 'react'
import { connect } from 'react-redux'
import apploading from '../actions/Loader'
import appready from '../actions/Loader'

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <p>Loading...</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  }
}

export default connect(mapStateToProps, {apploading, appready})(Loader)
