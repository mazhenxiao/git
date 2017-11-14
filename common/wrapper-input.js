import React, {Component} from 'react'
import {Input, Row, Col} from 'antd'
import {shallowCompare} from '../utils';

const rowStyle = {
    height: 28,
    lineHeight: "28px",
    marginBottom: "10px",
};

const labelStyle = {
    textAlign: "right",
    paddingRight: "5px",
};

class WrapperInput extends React.Component {

    static propTypes = {
        labelText: React.PropTypes.string.isRequired,
        labelSpan: React.PropTypes.number,
        inputSpan: React.PropTypes.number,
    };

    static defaultProps = {
        labelSpan: 12,
        inputSpan: 12,
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {

        const {labelText, labelSpan, inputSpan, ...inputProps} = this.props;

        return (
            <Row style={rowStyle}>
                <Col span={labelSpan} style={labelStyle}>
                    {labelText}
                </Col>
                <Col span={inputSpan}>
                    <Input {...inputProps}></Input>
                </Col>
            </Row>
        );
    }
}

export default WrapperInput;

