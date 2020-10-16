import React from 'react';
import {Link} from "react-router-dom";


class ImageSearchBar extends React.Component{

    state={term:''}

    onFormSubmit = (event) => {

        event.preventDefault();

        this.props.onSubmit(this.state.term);

    }



    render() {


        return(

            <div className='uiContainer' style={{marginTop:10,marginLeft:10}}>
                <form onSubmit={this.onFormSubmit}> 
                    <label>Search Bar </label>
                    <input type='text' onChange={(e)=>this.setState({term:e.target.value})} />
                </form> 
                <Link to="/ImageUpload"><button style={{marginLeft:90, marginTop:10}}>Image Upload Form</button></Link>
                
            </div>
        )
    }
}
export default ImageSearchBar;