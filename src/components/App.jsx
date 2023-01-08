import { Component } from 'react';
import css from './App.module.css'
import { MaterialForm } from './MaterialForm';
import * as API from './API/API'



export class App extends Component  {
  state = {
    materials:[],
  }
  async addMaterial (fieldData) {
    const matireal = await API.HTTPRequest(fieldData);
    this.setState()

      console.log("🚀  matireals", matireal);


  }
  render() {
    return (
    <div className={css.app}>
        <MaterialForm addMaterial={this.addMaterial}/>
    </div>
  );
    
  }
  
};


