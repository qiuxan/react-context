import React, { Component } from 'react'
import {ctx} from './interfaces/context'
import ChildB from './ChildB'

export default class ChildA extends Component {
  render() {
    return (
      <div>
        <h2>ChildA Start</h2>
        <h2>
            in ChildA:  
            <ctx.Consumer>
                {value => value ? <>{value.a}，{value.b}</> : null}
            </ctx.Consumer>
        </h2>

        <ChildB />
            
        <h2>ChildA End</h2>
      </div>
    )
  }
}
