//Imports
import React from 'react';
import ImageSearch from './components/ImageSearch/ImageSearch';
import ImageList from './components/ImageList/ImageList';

class App extends React.Component {

  state = {
    images: [],
    error: null
  }

  //Fetch Images
  handleGetRequest = async (e) => {
    e.preventDefault()

    const imageSearch = e.target.elements.searchValue.value

    //API url
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${imageSearch}&image_type=photo`

    const request = await fetch(url)
    const response = await request.json()

   if (!imageSearch) {
     this.setState({ error: 'Provide an item to search for...'})
   } else {
     this.setState({ images: response.hits, error: null })
   }

  }


  render() {
    return (
      <div>
        <ImageSearch handleGetRequest={this.handleGetRequest} />
        
        {
          this.state.error !== null ? 
          <div style={{color: '#fff', textAlign: 'center'}}>{this.state.error}</div> :
          <ImageList images={this.state.images} />
        }

      </div>
    )
  }
}

export default App;
