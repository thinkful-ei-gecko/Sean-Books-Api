import React from 'react';
import './App.css';
import Search from './Search';
import Header from './Header';
import Results from './Results';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      booksList: [],
      currentVolume:'',
      currentPrintType:'',
      currentBookType:''
  }
  this.updateStateCurrentBookType = this.updateStateCurrentBookType.bind(this);
  this.updateStateCurrentPrintType = this.updateStateCurrentPrintType.bind(this);
  this.updateCurrentVolumeState = this.updateCurrentVolumeState.bind(this);
  this.updateStateVolumeList = this.updateStateVolumeList.bind(this);
}

  updateStateVolumeList(response){
      this.setState({
        booksList: response
      })
  }

  updateCurrentVolumeState(response){
      this.setState({
        currentVolume: response
      })
  }

  updateStateCurrentPrintType(response){
    this.setState({
      currentPrintType: response
    })
  }

  updateStateCurrentBookType(response){
    this.setState({
      currentBookType: response
    })
  }
  

    getBooks = (query) => {
    const baseURL=`https://www.googleapis.com/books/v1/volumes?q=${query}`;
      fetch(baseURL)
      .then(response => response.ok ? response.json() : Promise.reject("Something went wrong here"))
      .then(response => {
        this.updateStateVolumeList(response.items)
      })
      query=null;    
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Search getBooks={this.getBooks} 
        updateStateCurrentPrintType={this.updateStateCurrentPrintType}
        updateStateCurrentBookType={this.updateStateCurrentBookType}
        updateCurrentVolumeState={this.updateCurrentVolumeState}/>
        <Results books={this.state.booksList} />
      </div>
    );
  }
}

export default App;
