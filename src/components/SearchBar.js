import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            term: ``
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event){
        this.setState({term: event.target.value})
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form" action="">
                    <div className="field">
                        <label>image search</label>
                        <input value={this.state.term} onChange={this.onInputChange} type="text"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;