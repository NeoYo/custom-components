import React, {useState, useRef, useEffect} from 'react';
import './App.css';
// import Icon from './react-ui/Icon';
import InputNumber from './react-ui/InputNumber';
import confirm from './react-ui/Confirm';

function App(){	
	// 测试 Confirm 组件
	useEffect(() => {
		console.log('componentDidMount');
		(async () => {
			let res = await confirm("确定删除吗")
			if(res) {
				console.log("是")
			} else {
				console.log("否")
			}	
		})();
	});

	// 测试 InputNumber 组件
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
