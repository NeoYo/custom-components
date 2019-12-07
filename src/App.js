import React from 'react';
import './App.css';
// import Icon from './react-ui/Icon';
import Input from './react-ui/Input';
import InputNumber from './react-ui/InputNumber';


class  App extends React.Component{
	constructor(props) {
		super(props);
		this.state ={
			value: 'a'
		}
	}
	value = '1'

	render() {
		return (
			<div>
				<h3>Input 受控</h3>
				<Input
				       value={this.state.value}
				       onChange={(e) => {
									this.setState({
										value: e.target.value
									})
				}}
				/>
				<h3>Input 不受控</h3>
				<Input
					rule={/\d/}
					message="只允许输入数字"
					defalutValue={this.value}
					onChange={(e) => {
						this.value = e.target.value
					}}/>
				<h3>InputNumber 受控</h3>
				<InputNumber
					rule={/\d/}
					message="只允许输入数字"
					defalutValue={this.value}
					onChange={(e) => {
						this.value = e.target.value
					}}/>
			</div>
		);
	}
}





export default App;
