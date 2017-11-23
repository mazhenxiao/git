import React, {Component} from 'react';
import {Button, Row, Col} from 'antd';
import {WrapperInput} from '../common';


class ComBuildingFilter extends Component {

    static propTypes = {
        onSearch: React.PropTypes.func,
    };

    static defaultProps = {
        onSearch: () => {
        },
    };

    state = {
        formatKey: "",
    };

    /**
     *  处理文本框change事件
     */
    handleInputChange = (key) => (e) => {
        this.setState(
            {
                [key]: e.target.value
            }
        );
    };

    handleClick = () => {
        const {formatKey} = this.state;
        this.props.onSearch && this.props.onSearch(formatKey);
    };

    render() {
        const {formatKey} = this.state;

        return (
            <Row>
                <Col span={5}>
                    <WrapperInput labelText="按业态：" labelSpan={8} inputSpan={16} value={formatKey}
                                  onChange={this.handleInputChange("formatKey")}/>
                </Col>
                <Col span={5} style={{textAlign: "left", paddingLeft: "10px"}}>
                    <Button onClick={this.handleClick}>查询</Button>
                </Col>
            </Row>
        );
    };
}

export default ComBuildingFilter;