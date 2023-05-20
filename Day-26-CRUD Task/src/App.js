import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Adduser } from './Components/Adduser';
import EditUsers from './Components/EditUser';
import { Nopage } from './Components/NoPage';
import Usercomponent from './Components/usercomponent';
import { Userdetails } from './Components/Userdetails';
import { data } from './Data/data';



function App() {
  const [user, setUser] =useState(data)

  return (
    <div className="App">

     <Switch>

      <Route exact path="/">
      <Usercomponent
      user={user}
      setUser={setUser}
      />
      </Route>

     <Route path="/add/user">
        <Adduser
        user={user}
        setUser={setUser}
        />
     </Route>

     <Route path="/edit/:ID">
      <EditUsers
      user={user}
      setUser={setUser}
      />

     </Route>

     <Route path="/user/:id"> 
            <Userdetails
            user={user}
            />
     </Route>

     <Route path="/Students">
        <Redirect path='/'></Redirect>

     </Route>

     <Route path="**">
      <Nopage/>
     </Route>

     </Switch>

    
    </div>
  );
}

export default  App;



