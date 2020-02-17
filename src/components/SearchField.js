import React, { Component } from 'react';
import { Input, Form, Button, Typography } from 'antd';

const { Title } = Typography;

class SearchField extends Component {
    saveAction = (e) => {
        e.preventDefault();
        const { onSubmit } = this.props;
        this.props.form.validateFieldsAndScroll((err, input) => {
            if (input.username !== '') {
                onSubmit(input.username);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.saveAction}>
                <Title level={3}>Search for a Github username</Title>
                <Form.Item label="Username" >
                    {getFieldDecorator('username', {
                        validateTrigger: 'onBlur'
                    })(
                        <Input placeholder="Please Input Username" />
                    )}
                </Form.Item>
                <Button htmlType="submit" type="primary" size="default"> Search </Button>
            </Form>
        )
    }
}
export default Form.create()(SearchField);