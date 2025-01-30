import React, { Component } from "react";
import { ctx } from "./interfaces/context";
import ChildA from "./ChildA";


interface NewContext2State {
    a: number;
    b: string;
    changeA: (newA: number) => void;
}


export class NewContext2 extends Component {
	state: NewContext2State = {
		a: 0,
		b: "abc",
		changeA: (newA: number) => {
			this.setState({
				a: newA,
			});
		},
	};
	render() {
		return <ctx.Provider value={this.state}>

            <h1>Parent2 start</h1>
                <ChildA />
                <button onClick={() => {
                        this.setState({
                            a: this.state.a + 1
                        });
                    }}>parent component btn，click to a+1</button>
            <h1>Parent2 end</h1>
        </ctx.Provider>;
	}
}

export default NewContext2;
