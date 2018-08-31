import React, { Component } from 'react';
import News from './Components/News'
import Add from './Components/Add'
import './App.css';


const myNews = [
  {
    id:1,
    author:'some one',
    text:'lorem insput ha',
    bigText:"lkdfjsldfg fdgg 3445v  45 d dfg fjsldkjf flgjk dfgfdl"
  },
  {
    id:2,
    author:'some one fdgfdg',
    text:'lorem inspudfg fdg dfg g dfg t ha',
    bigText:"lkdfjsldfj fg  44   fdgdf gfdg sldkjf flgjk dfgfdl"
  },
  {
    id:3,
    author:'some on fdgfdge',
    text:'lorem inspdfgfdg fg fdgut ha',
    bigText:"lkdfjsldfjsl dfg  f sdf324 ewr dkjf flgjk dfgfdl"
  },
]

class App extends Component{
  state = {
    news:myNews
  }

  handlerAddNews = (data) =>{
    const nextNews = [data, ...this.state.news]
    this.setState({news: nextNews})
  }

  render(){
    const {news} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>All news</h2>
        <Add onAddNews={this.handlerAddNews}/>
        <News data={news}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
