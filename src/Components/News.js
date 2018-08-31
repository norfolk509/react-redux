import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'

class News extends Component{
  state= {
    counter:0
  }

  renderNews= () =>{
    const { data } = this.props
    let newsTemplate
    if(data.length){
      newsTemplate = data.map((item, i) =>{
        return(
          <Article key={item.id} data={item}/>
        )
      })
    }else{
      newsTemplate = <p>There's no News yet</p>
    }
    return newsTemplate
  }


  render(){
    const { data } = this.props
    const { counter } = this.state
    return(
      <Fragment>
        {this.renderNews()}
        {data.length ? <strong> Total news: {data.length}</strong>: null}
      </Fragment>
    )
  }
}

News.propTypes ={
  data:PropTypes.array.isRequired
}


export default News
