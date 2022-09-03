import React from 'react';
import './App.css';

function Navbar(){
  return (
    <nav id="navbar">
      <span id="navbar-title">Random Quote Machine</span>
      <span id="navbar-creator">Created by <a target="_blank" href="https://github.com/efecane" rel="noopener noreferrer">Efecan Efe</a></span>
    </nav>
  )
}

function Quote(props) {

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div id="quote-box">
      <div id="quote-text">
        <span id="text">{props.text}</span>
      </div>
      <div id="quote-author">
        <span id="author">{props.author}</span>
      </div>
      <div id="buttons">
        <a id="tweet-quote" title="Tweet this quote!" href="https://www.twitter.com/intent/tweet">Twitter</a>
        <button id='new-quote' title='New Quote!' onClick={refreshPage}>New Quote</button>
      </div>
    </div>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: []
    }
  }

  componentDidMount() {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((json) =>{
        this.setState({
          quote: json
        })
      })
  }
  render () {
    return (
      <div className='page-wrapper'>
        <Navbar />
        <div id="quote-wrapper">
          <Quote text={this.state.quote.content} author={this.state.quote.author} />
        </div>
      </div>
    )
  }
}

export default App;

