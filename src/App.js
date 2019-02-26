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
  
  componentDidUpdate(prevProps, prevState) {
  	if (this.state.urls !== prevState.urls) {
    	console.log(this.state.urls);
  	}
	}

  render() {
    return (
      <div>
        <Form submit={this.addUrl}/>
        <Slider sliderItems={this.state.urls} trigger={this.componentDidUpdate}/>
      </div>
    );
  }
}

export default App;
