import React from 'react';
import './App.css';
import FilterBar from './FilterBar';
import Search from './Search';
import Header from './Header';
import Results from './Results';

class App extends React.Component {
  state={
    booksList: [],
    currentVolume:'',
  }

  updateStateVolumeList(response){
      this.setState({
        booksList: response
      })
  }

  updateCurrentVolumeState(response){

  }

  getBooks = query => {
    this.updateCurrentVolumeState(query);
    const baseURL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    console.log(baseURL)
      fetch(baseURL)
      .then(response => response.ok ? response.json() : Promise.reject("Something went wrong here"))
      .then(response => {
        this.updateStateVolumeList(response.items)
        console.log(this.state.booksList)
      })
      
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Search getBooks={this.getBooks} />
        <FilterBar />
        <Results books={this.state.booksList} />
      </div>
    )
  }
}

export default App;
