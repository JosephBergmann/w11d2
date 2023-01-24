import React, { useState } from 'react';
import Clock, { ClockToggle } from './components/Clock';
import Folder from './components/Folder';
import Weather from './components/Weather';
import AutoComplete from './components/Auto';

const names = [
  'Abba',
  'Barbara',
  'Barney',
  'Jeff',
  'Jenny',
  'Sally',
  'Sarah',
  'Xander'
];

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' }
];

function App(props) {
  const [showClock, setShowClock] = useState(true);

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(showClock)
    setShowClock(!showClock)
  }

  return (
    <div className="widgets">
      <Folder folders={folders} />
      <h1>joes the best</h1>
      <Weather />
      <button onClick={clickHandler}>We are not worthy</button>
      {showClock && <Clock />}
      <AutoComplete names={names} />
    </div>
  )
}
// constructor(props) {
//   super(props);
//   this.state = {
//     showClock: true
//   };
// }

// toggleClock = () => this.setState({ showClock: !this.state.showClock });

//   render () {
//     return (
//       <div className="widgets">
//         <Folder folders={folders} />
//         <Weather />
//         <ClockToggle toggleClock={this.toggleClock} />
//         {this.state.showClock && <Clock />}
//         <AutoComplete names={names} />
//       </div>
//     );
//   }
// }

export default App;