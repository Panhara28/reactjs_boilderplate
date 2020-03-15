import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppRoute } from './AppRoute';

export const IndexRoute = () => {
  return(
    <Switch>
      {
        AppRoute.map((x: any, i: any)=>{
          return <Route {...x} key={i}/>
        })
      }
    </Switch>
  )
}