import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        
        //Initial state
        this.state = {term: '', location: '', sortBy:'best_match'};
        
    }

    //return the current CSS class for a sorting option. Feedback to the users
    getSortByClass(sortByOption) {
        if(sortByOption == this.state.sortBy) {
            return 'active';
        } else {
            return '';
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption}) //this setState for handleSortByChange.bind
    }

    //term 'businesses' change 
    handleTermChange(event) {

    }
    //Location change
    handleLocationChange(event) {

    }

    // modify to return statement
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li  key = {sortByOptionValue} 
                        onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                        className={this.getSortByClass(sortByOptionValue)} >
                    {sortByOption}
                   </li>
        });
    }
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()} 
                    {/* to sort the businesses by their options */}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}
export default SearchBar;