import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
class Add extends Component{
  state = {
    author:"",
    text:"",
    bigText:'',
    checkbox:false,
    id:'',
  }

  componentDidMount(){
    document.getElementsByClassName('add_author')[0].focus()
  }

  handlerChange = (e) => {
    const {id, value} = e.currentTarget
    this.setState({ [id]:e.currentTarget.value })
  }

  handlerCheckbox = (e) =>{
    this.setState({checkbox:e.currentTarget.checked})
  }

  handlerClickButton = (e) => {
    e.preventDefault()
    const {author, text, bigText} = this.state
    alert(author + '\n' + text)

    this.props.onAddNews({id: +new Date(), author, text, bigText})
  }
  validate = () =>{
    const { author, text, checkbox} = this.state
    if(author.trim() && text.trim() && checkbox){
      return true
    }else{
      return false
    }
  }

  render(){
    const {author, text, bigText, checkbox} = this.state
    return(
      <div className="form_container">
        <form action="">
          <input className="test-input add_author"
                 type="text" id="author" onChange={this.handlerChange} placeholder="Please enter your data"
                 value={author}
          />
          <input className="test-input add_author"
                 type="text" id="text" onChange={this.handlerChange} placeholder="Please enter your data"
                 value={text}
          />
          <textarea className="add__news" id="bigText" onChange={this.handlerChange} value={bigText}></textarea>
          <input type="checkbox" onChange={this.handlerCheckbox} />
          <button disabled={!this.validate()} onClick={this.handlerClickButton}>Click Me!</button>
        </form>
      </div>
    )
  }
}

Add.propTypes = {
  onAddNews: PropTypes.func.isRequired
}

export default Add