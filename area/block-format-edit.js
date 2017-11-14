/**
 *  地块·业态维护 block-format-edit (1~2)
 */

import React, {Component} from 'react';
import {Modal, Tabs, Row, Col, Button} from 'antd';
import {shallowCompare} from '../utils';

class BlockFormatEdit extends Component {

    static propTypes = {
        onHideModal: React.PropTypes.func,//对外接口 操作完成时 关闭模态窗口
    };

    static defaultProps = {
        onHideModal: () => {
        },
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    handleSave = () => {

        this.props.onHideModal && this.props.onHideModal();
    };
    handleCancel = () => {

        this.props.onHideModal && this.props.onHideModal();
    };

    render() {
        return (
        	<div>
	            <Modal
	                title={"地块·业态维护"}
	                visible={true}
	                onCancel={this.handleCancel}
	                maskClosable={false}
	                footer={[
	                    <Button key="save" type="primary" size="large" onClick={this.handleSave}>
	                        确认
	                    </Button>,
	                    <Button key="cancel" type="primary" size="large" onClick={this.handleCancel}>
	                        取消
	                    </Button>,
	                ]}>
	                地块·业态维护
	            </Modal>
            </div>
        );
    };
}

export default BlockFormatEdit;