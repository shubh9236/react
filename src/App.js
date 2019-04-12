import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom' 
import './App.css'
import Todos from './components/Todos.js'
import Header from './components/layouts/Header.js'
import AddTodo from './components/AddTodo.js'
import About from './components/pages/About.js'
import uuid from 'uuid'
import Axios from 'axios'
import { Helmet } from "react-helmet"

class App extends Component {
  state = {
    todos : [{
      id : uuid.v4(),
      title : 'This Barnes & Noble Book Club Edition contains a special afterword from Martha Hall Kelly, featuring a deeply personal look at the many travels and journeys she took researching the history and the characters for Lost Roses and Lilac Girls, as well as a reading group guide.',
      completed : false
    },{
      id : uuid.v4(),
      title : 'From the cofounder of VerySmartBrothas.com, and one of the most read writers on race and culture at work today, a provocative and humorous memoir-in-essays that explores the ever-shifting definitions of what it means to be Black (and male) in America' ,
      completed : false
    },{
      id : uuid.v4(),
      title : 'An “irresistible” (Anthony Marra) debut about a Russian American girl’s bumpy path to adulthood',
      completed : false
    },{
      id : uuid.v4(),
      title : 'The Light Years is a joyous and defiant coming-of-age memoir set during one of the most turbulent times in American history',
      completed : false
    },{
      id : uuid.v4(),
      title : 'A gripping and deftly plotted narrative of family and belonging, Lights All Night Long is a dazzling debut novel from an acclaimed young writer',
      completed : false
    },{
      id : uuid.v4(),
      title : 'Diary of an Awesome Friendly Kid: Rowley Jefferson Journal',
      completed : false
    },{
      id : uuid.v4(),
      title : "Get ready for a whole new look into Jeff Kinney’s Diary of a Wimpy Kid! Introducing the newest Wimpy Kid author—Rowley Jefferson! Rowley’s best friend Greg Heffley has been chronicling his middle-school years in thirteen Diary of a Wimpy Kid journals . . . and counting.",
      completed : false
    },{
      id : uuid.v4(),
      title : "I can't even express how much I love this book! I didn't want this story to end!--Reese Witherspoon",
      completed : false
    },{
      id : uuid.v4(),
      title : 'The #1 Instant New York Times Bestseller – Soon to be a Major Motion Picture',
      completed : false
    },{
      id : uuid.v4(),
      title : 'From #1 New York Times bestselling author Richard Paul Evans, the dramatic conclusion in the riveting Broken Road trilogy—a powerful redemption story about finding happiness on a pilgrimage across iconic Route 66.',
      completed : false
    }]
  }

  // componentDidMount() {
  //   Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>this.setState({todos : res.data})) 
  // }

  //toggle complete
  markComplete = (id) =>{
    this.setState({todos : this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  //delete todo
  delTodo = (id) =>{
    //Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id)]}));
    this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  //add new todo task
  addTodo = (title)=>{
    // Axios.post('https://jsonplaceholder.typicode.com/todos',{
    //   title,
    //   completed : false
    // }).then(res=>this.setState({todos : [...this.state.todos,res.data]}));
    const newTodo = {
      id :uuid.v4(),
      title,
      completed : false
    }
    this.setState({todos : [...this.state.todos,newTodo]})
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
             {/* if we dont use exact then this will show in every route but we want to show only when we visit '/react' route */}
            <Route exact path='/react' render={props => (
              <Helmet>
                  <meta charSet="utf-8" />
                  <title>Inside react route</title>
              </Helmet>              
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos= {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>              
              </React.Fragment>
              )} />
              <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
