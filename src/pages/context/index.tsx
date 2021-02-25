import * as React from 'react';
import {ThemeContext} from '../../context'

interface IProps {}
interface IState {
	context: string
}
// context消费方式1：Class.contextType
class Toolbar extends React.Component<any, never> {
	static contextType = ThemeContext

	render() {
		console.log(`${this.props.type}-Toolbar=======>`, this.context)
		return (
			<div>
				Toobar
			</div>
		)
	}
}
// context消费方式2：Context.Consumer
function Tooltip(props: any) {
	return (
		<ThemeContext.Consumer>
			{
				(context) => {
					console.log(`${props.type}-Tooltip--->`, context)
					return <div>
						tooltip
					</div>
				}
			}
		</ThemeContext.Consumer>
	)
}
// Context修改方式：Context.Provider
class Context extends React.Component<IProps, IState> {
	static contextType = ThemeContext
	constructor(props: IProps,) {
		super(props);
		this.state = {
			context: 'Context-default'
		};
	}

	onChangeContext = () => {
		this.setState({
			context: 'Context-change'
		})
	}
	render(){
		console.log("自己消费默认值Context-render==>", this.context)
		return (
			<div>
				<button onClick={this.onChangeContext}>
					change context
				</button>
				<Toolbar type="first level"/>
				<Tooltip type="first level" />
				<ThemeContext.Provider value={this.state.context}>
					Context
					<Toolbar type="child level"/>
					<Tooltip type="child level" />
				</ThemeContext.Provider>
			</div>
		);
	}
}
export default Context;