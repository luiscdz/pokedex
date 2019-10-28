import React, { Component } from 'react'
import Search from '../../components/Search/Search'

class SearchPokemon extends Component {
  state = {
    isTyping: false,
    inputSearch: ''
  }

  onChange = (event) => {
    const value = event.target.value;

    this.setState({
      isTyping: value !== '',
      inputSearch: value
    });
  }

  onKeyPress = (event) => {
    const value = event.target.value
    if (event.charCode === 13 && value !== '' ) {
      this.props.onSearch(`${event.target.value}`.toLocaleLowerCase())
    }
  }

  onCancelSearch = () => {
    this.props.onCancel();
    this.setState({
      inputSearch: '',
      isTyping: false
    });
  }

  render() {
    const { onSearch } = this.props;
    const { isTyping, inputSearch } = this.state;
    return (
      <Search 
        isTyping={isTyping}  
        onSearch={onSearch} 
        onCancel={this.onCancelSearch}
        onKeyPress={this.onKeyPress}
        onChange={this.onChange}
        inputSearch={inputSearch}
      />
    )
  }
}

export default SearchPokemon;
