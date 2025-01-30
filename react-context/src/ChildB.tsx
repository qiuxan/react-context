import React, { Component } from "react";
import {ctx} from "./interfaces/context";

export default class ChildB extends Component {
	static contextType = ctx;
	declare context: React.ContextType<typeof ctx>;
	render() {
		return (
			<>
				<h3>ChildB start</h3>
				<br />
				In Child B - from Context：a: {this.context?.a}, b:
				{this.context?.b}
				<button
					onClick={() => {
						this.context?.changeA(this.context.a + 2);
					}}
				>
					Last grandChild component B btn click to a+2
				</button>
				<h3>ChildB end</h3>
			</>
		);
	}
}
