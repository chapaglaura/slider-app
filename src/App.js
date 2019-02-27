import React, { Component } from 'react';
import Form from './components/Form';
import Slider from './components/Slider';

class App extends Component {

  constructor(props) {
  	super(props);
    this.state = {
    	urls: []
    }
  }
  
  addUrl = (currentUrl) => {
  	const urls = [...this.state.urls];
    urls.push(currentUrl);
    this.setState({
    	urls: urls
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form submit={this.addUrl}/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Slider sliderItems={this.state.urls}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
