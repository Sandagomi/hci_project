import React from 'react';
import SearchBar from './ImageSearchBar'
import ImageList from './ImageList'
import unsplash from '../API/Unsplash'

class App extends React.Component{

        state ={images: []}

    onSaveSubmit= async (term)=>{

        const response = await unsplash.get('/search/photos',{

            params: {query:term},

        })

        
        this.setState({images:response.data.results})


    }

    render() {

        return(
            <div>
                <SearchBar onSubmit={this.onSaveSubmit}/>
                <ImageList images={this.state.images}/>
            </div>

        )
    }
}
export default App;