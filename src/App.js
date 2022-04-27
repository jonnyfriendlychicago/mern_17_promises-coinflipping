import logo from "./logo.svg";
import "./App.css";
import { First } from "react-bootstrap/esm/PageItem";

function App() {
    
  // const noMondays = new Promise((resolve, reject) => {
  //     if (new Date().getDay() === 1) {
  //       resolve("Someone has a case of the Mondays!");
  //     } else {
  //       reject("Good, it's not Monday!");
  //     }
  //   });

  //   noMondays.then((res) => console.log(res)).catch((err) => console.log(err));

  //   console.log("new Date().getDay(): ", new Date().getDay());

  ///////////////////////
  // this function stays unaffected 
  function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
  }

  // this is old 

  // function fiveHeadsSync() {
  //   let headsCount = 0;
  //   let attempts = 0;
  //   while (headsCount < 5) {
  //     attempts++;
  //     let result = tossCoin();
  //     console.log(`${result} was flipped`);
  //     if (result === "heads") {
  //       headsCount++;
  //     } else {
  //       headsCount = 0;
  //     }
  //   }
  //   return `It took ${attempts} tries to flip five "heads"`;
  // }
  // console.log(fiveHeadsSync());
  // console.log("This is run after the fiveHeadsSync function completes");


  function fiveHeadsNewTry() {
    return new Promise((resolve, reject) => {
      
      // First, list mutable variables
      let headsCount = 0; 
      let attempts = 0; 
      let maxAttempts = 100; 

      // now, do while loop: headsCount goal not achieved and attempts fewer than the max allowed per above 
      while (headsCount < 5 && attempts <= maxAttempts) {
        attempts++; // same approach here... 
        let result = tossCoin(); // ditto 
        console.log(`Coin landed on ${result}.`); // yep
        if (result === "heads") {
          headsCount++; 
        } else { 
          headsCount = 0; 
        }
      }

      if (attempts <= maxAttempts) {
        resolve(`Dude, took us ${attempts} to achieve five heads in a row.`); 
      } else {
        reject(`we hit our ${maxAttempts} without achieving 5 in a row.  Bummer!`); 
      }
    });
  }

  fiveHeadsNewTry()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  console.log("When does this run now? BEFORE the five heads function");




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
