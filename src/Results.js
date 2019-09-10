import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

class Results extends React.Component{

        render(props){
            console.log(props.onUpdate);
            //console.log(this.props.books)
            //if(this.props.books !== 'null' || 'undefined') {
            //    const data = this.props.books.items.map(newBook => (<li>{newBook.volumeInfo.title}</li>)) ;     
            //}
        return (
            <ul class='resultsList'>
            </ul>
        );
    }
}

export default Results