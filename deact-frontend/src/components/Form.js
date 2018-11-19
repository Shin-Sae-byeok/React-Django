import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;

class CustomForm extends React.Component {
  
    handleFormSubmit = (event, requestType, articleID) => {
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        
        switch ( requestType ) {
            case 'post':
                return axios.post('https://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            case 'put':                
                return axios.put(`https://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
        }
    }

    render() {
        return (
        <div>
            <Form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.articleID)}>
            <FormItem label="제목">
                <Input name="title" placeholder="제목을 적어주세요" />
            </FormItem>
            <FormItem label="내용">
                <Input name="content" placeholder="내용을 적어주세요" />
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType="submit" >{this.props.btnText}</Button>
            </FormItem>
            </Form>
        </div>
        );
    }
}

export default CustomForm;