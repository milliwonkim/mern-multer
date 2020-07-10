import React, { Component } from 'react';
import FilesUploadComponent from './components/files-upload-component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilesUploadComponent />
      </div>
    );
  }
}

export default App;