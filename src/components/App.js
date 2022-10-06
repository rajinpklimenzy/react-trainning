import React from 'react';
import SearchInput from "./SearchInput";
import axios from 'axios';
import ImageList from './ImageList';


class App extends React.Component{
   state = {images:[]}
    onSearchSubmit = async (entry) =>{

      const response = await axios.get(`https://pixabay.com/api/?key=30332505-65e6abb36d8259ce52a23804f&q=${entry}&image_type=photo`)
      this.setState({images:response.data.hits})
      //console.log(response.data.hits);
    }

    render() {
    return(
        <div className='ui container' style={{ marginTop:'30px' }}>
            <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            <ImageList Images = {this.state.images}/>
       </div>

        )
    }
}

export default App;