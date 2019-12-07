// loading/index.js
import ReactDOM from "react-dom";
import React from "react";
import Button from '../Button';
import PropTypes from 'prop-types'
import './index.scss'

class Confirm extends React.Component{
	static propTypes = {
		message: PropTypes.string,
		onConfirm: () => {},
	}
	render() {
		return (
			<div className='confirm'>
				<div className='confirm__mask'></div>
				<div className='confirm__content'>
					{this.props.message}
					<div className='confirm__content__buttons'>
						<Button
							icon=""
							style={{'marginRight': '100px'}}
							onClick={(e) => {
								this.props.onConfirm(true);
							}}
							>
							确定
						</Button>
						<Button
							icon=""
							onClick={(e) => {
								this.props.onConfirm(false);
							}}>
							取消
						</Button>
					</div>
				</div>				
			</div>
		);
	}
}

const confirm = function(message) {
	let node = null;
	let promiseResolve = null;
	node = document.createElement('div')
	document.body.appendChild(node)
	ReactDOM.render(
		<Confirm
			message={message}
			onConfirm={(isConfrim) => {
				promiseResolve(isConfrim);
				if(node) {
					ReactDOM.unmountComponentAtNode(node)
					document.body.removeChild(node)
				}
			}}
			/>,
		node
	)
	return new Promise((resolve) => {
		promiseResolve = resolve;
	});
};

export default confirm;