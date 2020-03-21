import React, { Component } from 'react';
import axios from 'axios'

import './FullPost.css';

class FullPost extends Component {
    state={
        loadedPost:null
    }
    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id))
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response=>{
                    this.setState({loadedPost:response.data})
                    console.log(this.state.loadedPost);
                });
        }
        
    }
    deletePostHandler = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response=>{
                    console.log(response);
                });
    }
    render () {
        let post = <h1 style={{textAlign:"center", fontWeight:"bold", fontSize:"50px"}}>Please select a Post!</h1>;
        if(this.props.id){
            post = <h1 style={{textAlign:"center"}}>Loading...!</h1>;
        }
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.content}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;