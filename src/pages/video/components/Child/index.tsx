import * as React from 'react';
// import hoistNonReactStatics from 'hoist-non-react-statics';
// import anymatch from 'anymatch';

interface IProps {
    child: string;
}
interface IState {
    child: string;
}
export default class Child extends React.Component<IProps, IState> {
    static getDerivedStateFromProps(props: IProps, state: IState) {
        console.log("child====>props====>", props);
        return null;
    }
    constructor(props: IProps) {
        super(props);
        this.state = {
            child: 'child'
        }
    }

    onClick = () => {
        this.setState({
            child: 'child change child'
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.onClick}>
                    change child child
                </button>
                {
                    this.state.child
                }
            </div>
        )
    }
}