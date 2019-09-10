import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

class Results extends React.Component{
  
    render(){
        
    const data=this.props.books.map(newBook => (<li>{newBook.volumeInfo.title}</li>)) ;    

    return (
        <ul className='resultsList'>
            {data}
        </ul>
    );
    }
}

export default Results