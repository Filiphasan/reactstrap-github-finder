import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            keyword: ''
        }
    }
    onChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        if (this.state.keyword.trim() !== '') {
            this.props.searchUsers(this.state.keyword);
            this.setState({
                keyword: ''
            });
            e.target.search.value = ""
            this.props.setAlert(null);
        }
        else {
            this.props.setAlert('Please enter a value', 'danger');
        }
    }
    render() {
        return (
            <div className="container my-3">
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <input type="text" name="search" onChange={this.onChange} className="form-control" placeholder="Search by Username" />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-success">Search</button>
                        </div>
                    </div>
                </form>
                {this.props.showClearBtn &&
                    <button className="btn btn-secondary btn-sm btn-block mt-2" onClick={this.props.clearResults}>Clear Results</button>}
            </div>
        )
    }
}

export default Search
