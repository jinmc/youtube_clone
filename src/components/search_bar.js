import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term : ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    render(){
        // console.log(this.state.term);
        return (
            <div className="search-bar">
                <input
                    value={this.state.term} 
                    onChange={this.onInputChange} 
                />
            </div>
        );
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
        // console.log(event.target.value);
    }
}

export default SearchBar;