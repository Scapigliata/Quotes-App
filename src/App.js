import React from 'react';
import { RingLoader } from 'react-spinners';
import './App.css';
import Quote from './components/Quote';
import axios from 'axios';

class App extends React.Component {

  state = {
    author: 'Scapigliata',
    quote: '"If I have eaten a thousand cookies, I know it is my destiny to eat a thousand more',
    error: false,
    loading: false
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote = () => {
    this.setState(() => ({
      loading: true
    }));

    axios.get('https://favqs.com/api/qotd')
      .then((res) => {
        const { author, body } = res.data.quote;
        this.setState(() => ({
          author,
          quote: body, 
          loading: false
        }))
      })
      .catch(() => {
        this.setState(() => ({
          error: true,
          loading: false
        }));
      });
  }


  render() {
    return (
      <div className="container">
        <div className="container__box">
          {
            this.state.loading
              ? (
                <div>
                <div className="quote--loading">
                <RingLoader
                loading={this.state.loading}
                />
                </div>
                <p className="quote--msg">Getting Quote...</p>
                </div>
              )
              : (
                <Quote 
                author={this.state.author}
                quote={this.state.quote}
                getQuote={this.getQuote}
                error={this.state.error}
                />
              )
          }
        </div>
      </div >
    );
  }
};

export default App;
