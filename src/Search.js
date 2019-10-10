import React from 'react';

class Search extends React.Component {

    handleSubmit = event => {
        event.preventDefault();
        const searchTerm = document.getElementById('searchValue').value;
        const printType = document.getElementById('printType').value;
        const bookType = document.getElementById('bookType').value;
        if(printType==='none' && bookType==='none'){
            this.props.getBooks(searchTerm);
        }
        else if(searchTerm && (printType!==undefined && printType!=='none') && (bookType!==undefined && bookType !== 'none')){
            let temp=searchTerm;
            let x='printType=';
            let y='filter=';
            let temp1= x.concat(printType);
            let temp2= y.concat(bookType);
            let newQuery = temp.concat('&');
            newQuery = newQuery.concat(temp1);
            newQuery = newQuery.concat('&');
            newQuery = newQuery.concat(temp2);
            this.props.updateStateCurrentBookType(bookType);
            this.props.updateStateCurrentPrintType(printType);
            this.props.updateCurrentVolumeState(searchTerm);
            this.props.getBooks(newQuery);
        }
        else if(printType==='none'){
            let temp=searchTerm;
            let y='filter=';
            let temp1= y.concat(bookType);
            let newQuery = temp.concat('&');
            newQuery = newQuery.concat(temp1);
            this.props.updateStateCurrentBookType(bookType);
            this.props.updateCurrentVolumeState(searchTerm);
            this.props.getBooks(newQuery);
        }
        else if(bookType==='none'){
            let temp=searchTerm;
            let x='printType=';
            let temp1= x.concat(printType);
            let newQuery = temp.concat('&');
            newQuery = newQuery.concat(temp1);
            this.props.updateStateCurrentPrintType(printType);
            this.props.updateCurrentVolumeState(searchTerm);
            this.props.getBooks(newQuery);
        }
    }

    render(){
        return (
            <form className='searchBar' onSubmit={this.handleSubmit}>
                <input type="text" id='searchValue' placeholder='Enter a book' required></input>
                <p>Print Type: </p>
                <select id='printType'>
                    <option value='none'></option>
                    <option id='all' value="all">All</option>
                    <option id='books' value="books">Books</option>
                    <option id='magazines' value="magazines">Magazines</option>
                </select>
                <p>Book Type: </p>
                <select id='bookType'>
                    <option value='none'></option>   
                    <option id="partial" value='partial'>Partial</option>
                    <option id='full' value='full'>Full</option>
                    <option id='freeEbooks' value='free-ebooks'>Free eBooks</option>
                    <option id='paid' value='paid-ebooks'>Paid eBooks</option>
                    <option id='eBooks' value='ebooks'>Ebooks</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        )
    }

}

export default Search