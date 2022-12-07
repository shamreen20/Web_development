import React, { Fragment } from "react";
import {Route, Switch, Redirect} from "react-router-dom"; 

import AllBlogs from "./components/Pages/AllBlogs";
import NavBar from "./components/Layout/Navbar";
import BlogDetails from "./components/Pages/BlogDetails";
import NewBlog from "./components/Pages/NewBlog";
import NotFound from "./components/Pages/NoBlog";

const App = () => {
  return(
    <Fragment>
    <div>
    <NavBar />
    <div className="main">
    
    <Switch>
    <Route path="/" exact>
    <Redirect to="/blogs" />
    </Route>

    <Route path="/blogs" exact>
    <AllBlogs />
    </Route>
    
    <Route path="/blogs/:blogId">
    <BlogDetails />
    </Route>

    <Route path="/new-blog">
    <NewBlog />
    </Route>

    <Route path="*">
    <NotFound />
    </Route>
    </Switch>
   


    </div>
    </div></Fragment>
    
    
  )
}

export default App;