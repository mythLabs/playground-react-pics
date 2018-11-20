import React from "react";
import SearchBar from "./SearchBar";
import axios from 'axios';

class App extends React.Component {
  state = {images: []}

   onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
       params: {query: term},
       headers:{
           Authorization: 'Client-ID XXXXXXXXX'
       }
    });

    this.setState({images: response.data.results})
    console.log(response);
  }


  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        {this.state.images.length}
      </div>
    );
  }
}

export default App;
