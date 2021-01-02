import React from "react";
import Unsplash from '../api/unsplash';
import SearchBar from "./SearchBar";

class App extends React.Component {
  
  state = {
    images: []
  }

  onFormSubmit = async (term) => {
    const response = await Unsplash.get('/search/photos', {
      params: {
        query: term
      },

    });

    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onFormSubmit}/>

        Found: {this.state.images.length} Images;
      </div>
    );
  }
}

export default App;
