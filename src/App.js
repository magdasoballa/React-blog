import React from 'react';
import {Header} from "./components/Header";
import './App.css'
import {BlogProvider} from './context/BlogProvider'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from "./pages/Home";
import {Post} from './pages/Post'

const App = () => {
    return (
        <BlogProvider>
            <div className='App'>
                <Router>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/:postId' exact component={Post}/>
                    </Switch>
                </Router>

            </div>
        </BlogProvider>
    )
}

export default App;
