import React from 'react';

type Props = {
  title: string,
  col?: any
}

export class Card extends React.Component<Props>{
  render(){
    return(
      <div className={this.props.col}>
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">{this.props.title}</h4>
          </div>
          <div className="card-content collpase show">
            <div className="card-body">
              {
                this.props.children
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
