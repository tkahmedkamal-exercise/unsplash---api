import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
  
  onFormSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID deUQ7XhGmjmV11UfFWLynvUrOxM0RdejNgKhNrMV6do'
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onFormSubmit}/>
      </div>
    );
  }
}

export default App;
