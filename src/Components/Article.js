import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
class Article extends Component{

  state= {
    visible:false,
  }

  handlerEvent = (e) =>{
    e.preventDefault()
    this.setState({ visible:!this.state.visible })
  }

  render(){
    const {author, text, bigText} = this.props.data
    const {visible} = this.state
    return(
      <div className="article">
        <h1 className="news__author">{author}:</h1>
        <h3 className="news__text">{text}</h3>
        {visible && <p className="news__big-text">{bigText}</p>}
        <a href="#" onClick={this.handlerEvent} className="news__readmore">{!visible ? 'Read more' : 'Show less'}</a>
      </div>
    )
  }
}

Article.propTypes = {
  data: PropTypes.shape({
    id:PropTypes.number.isRequired,
    author:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    bigText:PropTypes.string.isRequired,
  })
}

export default Article