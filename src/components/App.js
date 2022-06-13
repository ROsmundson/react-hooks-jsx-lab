import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;


/*
##JSX
is declarative programming

const div = (
  <div id="card1" className="card">
    hello world
  </div>
);
ReactDOM.render(div, document.body);

React components return JSX:
function Tweet() {
  const currentTime = new Date().toString();

  // this returns JSX!
  return (
    <div className="tweet">
      <img src="http://twitter.com/some-avatar.png" className="tweet__avatar" />
      <div className="tweet__body">
        <p>We are writing this tweet in JSX. Holy moly!</p>
        <p>{Math.floor(Math.random() * 100)} retweets </p>
        <p>{currentTime}</p>
      </div>
    </div>
  );
}
Every function component you use needs to return one JSX element.
The entire return statement is wrapped in parentheses, so it's one 'chunk' of JSX code, with one top level element:
return <div className="tweet">{child elements in here}</div>;

##JSX is not a String, not wrapped in quotes

##JSX can include JavaScxript, in-line by wrapping the JavaScript in curly braces.
<p>{ Math.floor(Math.random()*100) } retweets</p>
<p>{ currentTime }</p>

##JSX works with expressions, not statements
expressions have a return value, statemnts do not.
for example, you cannot use if statements
<h1 id="header">{if (true) {
  "Hello"
} else {
  "Goodbye"
}}</h1>
above is not valid JSX

ternary expressions do work!
<h1 id="header">{true ? "Hello" : "Goodbye"}</h1>

if you need to exress code with an if statemnt, you need to call another function within JSX
function Header() {
  function getHeaderText(isHello) {
    if (isHello) {
      return "Hello";
    } else {
      return "Goodbye";
    }
  }

  return <h1 id="header">{getHeaderText(true)}</h1>;
}

##A component can render another component using JSX
function Header() {
  return <h1>Hello</h1>;
}

function Page() {
  return (
    <div>
      <Header />
      <p>Some great content in here</p>
    </div>
  );
}

name of elements is lowercase
name of components is capitalized
This is how react differentiates the <Header> component from a normal HTML <header> element.

##A component must return one JSX Element
we can use any HTML element we normaly use to contain content.

function PlainDiv() {
  return <div>I am one line, so I do not need the parentheses</div>;
}

const Photo = () => {
  return (
    <figure>
      <img
        className="image"
        src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif"
      />
      <figcaption>Whoa</figcaption>
    </figure>
  );
};

const Table = () => (
  <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
    </tr>
    <tr>
      <th>312213</th>
      <th>Tim Berners-Lee</th>
    </tr>
  </table>
);

function ParentComponent() {
  return (
    <main>
      <PlainDiv />
      <Photo />
      <Table />
    </main>
  );
}

All above have one returned JSX element

If you want a component to return multiple JSX elements that aren't wrapped in a containing DOM element, React fragments (Links to an external site.) can help with that.

##JSX Property Names
JSX uses className instead of class
JSX uses htmlFor instead of for

*/