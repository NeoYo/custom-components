import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import './index.scss'
class InputNumber extends Component {
    constructor(props) {
        super(props)
        this.state = {
            focus: false,
            innerValue: ''
        }
    }
    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func,
        size: PropTypes.string,
        max: PropTypes.number,
        min: PropTypes.number,
    }

    static defaultProps = {
        size: 'middle',
        onChange: () => { }
    }

    get isControl() {
        return 'value' in this.props
    }

    get value() {
        if (this.isControl) {
            return this.props.value
        } else {
            return this.state.innerValue
        }
    }

    getValidNumber(value) {
        const num = Number(value.replace(/(?!-)[^0-9.]/g, ''));
        const { max, min } = this.props;
        if (typeof(max) === 'number'
            && num > max) {
            return max;
        }
        if (typeof(min) === 'number'
            && num < min) {
            return min;
        }
        return num;
    }

    render() {
        const {
            focus
        } = this.state
        const {
            icon,
            children,
            size,
            prefix,
            suffix,
            onChange,
            rule = new RegExp(),
            message,
            ...rest

        } = this.props
        let cls = classNames({
            input: true,
            focus,
            [`size-${size}`]: true,
            'react-ui__input': true
        })
        return (
            <div>
                <div className={cls}>
                    {prefix && <Icon name={prefix} />}
                    <input
                        {...rest}
                        value={this.value}

                        onFocus={e => {
                            this.setState({
                                focus: true
                            })
                        }}
                        // 跟 InputNumber 一样 blur 时过滤非 Number
                        onBlur={e => {
                            const value = this.getValidNumber(e.target.value);
                            this.setState(
                                {
                                    focus: false,
                                    innerValue: value,
                                },
                            );
                            this.props.onChange({
                                ...e,
                                target: {
                                    ...e.targe,
                                    value,
                                },
                            });
                        }}
                        onChange={(e) => {
                            if (!this.isControl) {
                                this.setState({
                                    innerValue: e.target.value
                                })
                            }
                            this.props.onChange(e)
                        }}
                    />
                    {suffix && <Icon name={suffix} />}


                </div>
                <p>
                    {!rule.test(this.value) && message}
                </p>
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            innerValue: this.props.defaultValue
        })
    }

}


export default InputNumber

// 受控
// 非受控
