import React, {Component} from 'react'
import {Provider as PaperProvider, Searchbar} from 'react-native-paper'

class SearchHeader extends Component {
    state = {
        firstQuery: '',
      };

    render () {
        const { firstQuery } = this.state;
        return (
                 <Searchbar
                    placeholder="Search"
                    onChangeText={query => { this.setState({ firstQuery: query }); }}
                     value={firstQuery}
                />                
        )
    }
    static navigationOptions = {
        title: 'Home',
    }   
}

export default SearchHeader