import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import { AreaChart } from 'react-easy-chart';
//import { Sparklines, SparklinesLine } from 'react-sparklines';

class App extends Component {
  state={
    disp: [],
    displ: {
      anger:[],
      contempt:[],
      disgust:[],
      engagement: [],
      fear: [],
      joy: [],
      sadness: [],
      surprise: []
    }
  };
  data={};
  rendered=false;
  lines={
    anger: [],
    contempt: [],
    disgust: [],
    engagement: [],
    fear: [],
    joy: [],
    sadness: [],
    surprise: []
  };
  displ={
    anger:[],
    contempt:[],
    disgust:[],
    engagement: [],
    fear: [],
    joy: [],
    sadness: [],
    surprise: []
  };
  async componentWillMount() {
    if(this.rendered != true) {
        this.rendered = true;
        var config = {
          apiKey: "AIzaSyCOmubrc3gEd6LOW5UfRH5LVaL-GFgRCgk",
          authDomain: "not-so-awesome-project-45a2e.firebaseapp.com",
          databaseURL: "https://not-so-awesome-project-45a2e.firebaseio.com",
          projectId: "not-so-awesome-project-45a2e",
          storageBucket: "not-so-awesome-project-45a2e.appspot.com",
          messagingSenderId: "481329884022"
        };
        //firebase.app(config);
        firebase.initializeApp(config);
        await firebase.database().ref('/').on('value', snapshot => {
          //console.log(snapshot.val());
          this.data = snapshot.val().emotions;
          console.log(this.data);
          this.manipulateData();
        });
      }
      this.manipulateData();
    }
  manipulateData() {
    for(let i in this.data){
      //console.log(i);
      //console.log(this.data[i]);
      this.lines.anger.push(this.data[i].anger);
      this.lines.contempt.push(this.data[i].contempt);
      this.lines.disgust.push(this.data[i].disgust);
      this.lines.engagement.push(this.data[i].engagement);
      this.lines.fear.push(this.data[i].fear);
      this.lines.joy.push(this.data[i].joy);
      this.lines.sadness.push(this.data[i].sadness);
      this.lines.surprise.push(this.data[i].surprise);
      console.log('bazooka',this.data[i].contempt);
      console.log('yaah',typeof(this.data[i].anger));
    }
    //console.log(this.lines.anger);
    this.displ.anger = this.lines.anger.map((value, index) => {
      return{x: index, y: value}
    }).reverse().slice(0,50);
    this.displ.contempt = this.lines.contempt.map((value, index) => {
      return{x: index, y: value}
    }).reverse().slice(0,50);
    this.displ.disgust = this.lines.disgust.map((value, index) => {
      return{x: index, y: value}
    }).reverse().slice(0,50);
    this.displ.engagement = this.lines.engagement.map((value, index) => {
      return{x: index, y: value}
    }).reverse().slice(0,50);
    this.displ.fear = this.lines.fear.map((value, index) => {
      return{x: index, y: value}
    }).reverse().slice(0,50);
    this.displ.joy = this.lines.joy.map((value, index) => {
      return{x: index, y: value}
    }).reverse().slice(0,50);
    this.displ.sadness = this.lines.sadness.map((value, index) => {
      return{x: index, y: value}
    }).reverse().slice(0,50);
    this.displ.surprise = this.lines.surprise.map((value, index) => {
      return{x: index, y: value}
    }).reverse().slice(0,50);
    
    console.log('shoop',this.displ);
    const displ = this.displ;
    //this.setState({disp: this.lines.anger.splice(0,10)});
    this.setState({ displ });
  }
  render() {
    //this.manipulateData();
    //console.log(this.state);
    return (
      <div className="App">
        <header className="App-header" style={{height: 60}}>
          <h1>Psyche Chat Dashboard</h1>
        </header>
        <h3> Anger</h3>
        <AreaChart
        axes
        axisLabels={{x: 'Time'}}
        grid
        verticalGrid
        interpolate={'cardinal'}
        height={280}
        width={680}
        data={[this.state.displ.anger]}
        />
        <h3> Contempt</h3>
        <AreaChart
        axes
        axisLabels={{x: 'Time'}}
        grid
        verticalGrid
        interpolate={'cardinal'}
        height={280}
        width={680}
          data={[this.state.displ.contempt]}
        />
        <h3> Disgust</h3>
        <AreaChart
        axes
        axisLabels={{x: 'Time'}}
        grid
        verticalGrid
        interpolate={'cardinal'}
        height={280}
        width={680}
          data={[this.state.displ.disgust]}
        />
        <h3> Engagement</h3>
        <AreaChart
        axes
        axisLabels={{x: 'Time'}}
        grid
        verticalGrid
        interpolate={'cardinal'}
        height={280}
        width={680}
          data={[this.state.displ.engagement]}
        />
        <h3> Fear</h3>
        <AreaChart
        axes
        axisLabels={{x: 'Time'}}
        grid
        verticalGrid
        interpolate={'cardinal'}
        height={280}
        width={680}
          data={[this.state.displ.fear]}
        />
        <h3> Joy</h3>
        <AreaChart
        axes
        axisLabels={{x: 'Time'}}
        grid
        verticalGrid
        interpolate={'cardinal'}
        height={280}
        width={680}
          data={[this.state.displ.joy]}
        />
        <h3> Sadness</h3>
        <AreaChart
        axes
        axisLabels={{x: 'Time'}}
        grid
        verticalGrid
        interpolate={'cardinal'}
        height={280}
        width={680}
          data={[this.state.displ.sadness]}
        />
        <h3> Surprise</h3>
        <AreaChart
        axes
        axisLabels={{x: 'Time'}}
        grid
        verticalGrid
        interpolate={'cardinal'}
        height={280}
        width={680}
          data={[this.state.displ.surprise]}
        />
        {/* <Sparklines data={this.lines.anger.splice(0,50)}>
            <SparklinesLine />
        </Sparklines>
        {/*<Sparklines data={this.lines.contempt.splice(0,50)}>
            <SparklinesLine />
        </Sparklines>
        <Sparklines data={this.lines.disgust.splice(0,50)}>
            <SparklinesLine />
        </Sparklines>
        <Sparklines data={this.lines.engagement.splice(0,50)}>
            <SparklinesLine />
        </Sparklines>
        <Sparklines data={this.lines.fear.splice(0,50)}>
            <SparklinesLine />
        </Sparklines>
        <Sparklines data={this.lines.joy.splice(0,50)}>
            <SparklinesLine />
        </Sparklines>
        <Sparklines data={this.lines.sadness.splice(0,50)}>
            <SparklinesLine />
        </Sparklines>
        <Sparklines data={this.lines.surprise.splice(0,50)}>
            <SparklinesLine />
        </Sparklines>     */}
      </div>
    );
  }
}

export default App;
