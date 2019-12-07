import React, {useState, useRef} from 'react';
import './App.css';
// import Icon from './react-ui/Icon';
import InputNumber from './react-ui/InputNumber';

function App(){
	const [value, setValue] = useState('222');
	// value 私有属性
	const valueRef = useRef('111');
    return (
        <div>
			<h3>InputNumber 受控组件</h3>
			<InputNumber
				size='middle'
				value={value}
				onChange={e=>{
					setValue(e.target.value)
				}}
				/>
			<h3>InputNumber 非受控组件</h3>
			<InputNumber
				max={10}
				min={0}
				size='middle'
				defaultValue={valueRef.current}
				onChange={e => {
					console.log('非受控组件: onChange value', e.target.value);
					valueRef.current = e.target.value;
				}}
				/>
        </div>
    )
}

export default App;
