import React, { Component, ReactNode } from 'react';

interface ContextProps {
    a: number;
    b: string;
    changeA: (newA: number) => void;
}

const ctx = React.createContext<ContextProps | undefined>(undefined);

function ChildA(props: {}): JSX.Element {
    return <div>
        <h2>ChildA start</h2>
        <h2>
            in ChildA:  
            <ctx.Consumer>
                {value => value ? <>{value.a}，{value.b}</> : null}
            </ctx.Consumer>
        </h2>
        <ChildB />
        <h2>ChildA end</h2>
    </div>
}

class ChildB extends React.Component {
    static contextType = ctx;
    declare context: React.ContextType<typeof ctx>;

    render() {
        return <p>
            <h3>ChildB start</h3>
            <br/>In Child B - from Context：a: {this.context?.a}, b:{this.context?.b}
            <button onClick={() => {
                this.context?.changeA(this.context.a + 2);
            }}>Last grandChild component B  btn click to a+2</button>
            <h3>ChildB end</h3>
        </p>
    }
}

interface NewContextState {
    a: number;
    b: string;
    changeA: (newA: number) => void;
}

export default class NewContext extends Component<{}, NewContextState> {

    state: NewContextState = {
        a: 0,
        b: "abc",
        changeA: (newA: number) => {
            this.setState({
                a: newA
            });
        }
    };

    render() {
        return (
            <ctx.Provider value={this.state}>
                <h1>Parent start</h1>
                <div>
                    
                    <ChildA />

                    <button onClick={() => {
                        this.setState({
                            a: this.state.a + 1
                        });
                    }}>parent component btn，click to a+1</button>
                </div>
                <h1>Parent end</h1>
            </ctx.Provider>
        );
    }
}
