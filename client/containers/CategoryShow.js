import React, { Component } from 'react'
import { connect } from 'react-redux'
import appLoading from '../actions/loading'
import Title from '../components/Title'
import { browserHistory } from 'react-router'


export class CategoryShow extends Component {

  componentDidMount() {
     const { categoryId } = this.props.routeParams.categoryId
   }

    render() {
      // filter out category with same categoryId
      const { categories, routeParams } = this.props
      const currentCategory = categories.filter((category) => {
        return category.categoryId === parseInt(routeParams.categoryId)
      })[0]
      //Only return 1 result

          return (
          <div className="category-show">
              <Title label= { currentCategory.name } />
              <button onClick={ browserHistory.goBack }>Back</button>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, {})(CategoryShow)
