import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: ''
        }
    }

    typeURL = (event) => {
        this.setState({ url: event.target.value });
    }
    
    submitUrl = (event) => {
    	event.preventDefault();
      const url = this.state.url;
      this.setState({
      	url: ''
      })
    	return this.props.submit(url);
    }
    
    render() {
        return (
            <form onSubmit={this.submitUrl} className="form-group">
                <input className="form-control" aria-describedby="imageURL" onChange={this.typeURL} value={this.state.url} type="text" placeholder="Enter URL here" required />
                <button type="submit" className="btn btn-warning">Submit</button>
            </form>
        );
    }
}


export default Form;