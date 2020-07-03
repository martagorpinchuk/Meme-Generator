import React, {Component} from 'react'
 import About from './About'
 import LogIn from './LogIn'
 import Submit from './Submit'
 import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Header() {
        return(
            <Router>
                <div>
                    <nav>
                        <a href="#"><Link to="/" >Home</Link></a>
                        <a href="#"><Link to="/about">About</Link></a>
                        <a href="#"><Link to="/logIn">Log In</Link></a> 
                        <a href="#"><Link to="/submit">Sing Up</Link></a>
                    </nav>
                    <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/logIn">
                                <LogIn />
                            </Route>
                            <Route path="/submit">
                                <Submit />
                            </Route>
                        </Switch>        
                    <h2 className="WordMemeGenerator">
                        Meme Generator
                    </h2>
                </div>
            </Router>
        )
}

export default Header 