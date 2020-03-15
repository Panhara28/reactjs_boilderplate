import React from 'react';
import { DesktopMenu } from './DesktopMenu';

export class Layout extends React.Component {

  render(){
    return(
      <div>
        <DesktopMenu />
        <div className="app-content content">
          <div className="content-overlay"></div>
          <div className="content-wrapper">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}