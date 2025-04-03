import './App.css';
import Choice from './components/Choice/Choice';
import StickerList from './components/StickerList/StickerList';
import { Component } from 'react';

class App extends Component {

  state = {
    label: null,
  };
  information = (label) => {
    this.setState({
      label: label,
    });
  };
  render(){
    return(
      <>
      <StickerList SelectedSticker={this.information}/>
      <Choice stickerLabel={this.state.label}/>
      </>
    )
  }
}
export default App;
