import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import FilterBar from './FilterBar';
import Search from './Search';
import Header from './Header';
import Results from './Results';

class App extends React.Component {
  state={
    booksList:'',
    currentVolume:'',

  }

  updateStateVolumeList(response){
      this.setState({booksList:response})
  }

  updateCurrentVolumeState(response){

  }

  getBooks = query => {
    console.log(query)
    this.updateCurrentVolumeState(query);
    const baseURL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    console.log(baseURL)
      fetch(baseURL)
      .then(response => response.ok ? response.json() : Promise.reject("Something went wrong here"))
      .then(response => this.updateStateVolumeList(response))
      
  }


  render() {
    return (
      <div className="App">
        <Search getBooks={this.getBooks} />
      </div>
    )
  }
}

export default App;
