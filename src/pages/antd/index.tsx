import * as React from 'react';
import {setCookie, getCookie} from 'Utils/helper';
import {
    Card,
    Form,
    Input,
    Row,
    Col
} from 'antd';

const PAGE_TITLE = 'ANTD_UI';

class Antd extends React.Component<any, never>{
    constructor(props: any) {
        super(props);
        setCookie("home", "antd");
        let domain = getCookie('home');
        let dot = getCookie('home');
        console.log("domain===>", domain);
        console.log("dot===>", dot);

        console.log("antd");
    }

    onToHome = () => {
    }

    render(){
        return (
            <Card title={PAGE_TITLE}>
                <button onClick={this.onToHome}>
                    toHome
                </button>
                <Form layout="inline">
                    <Form.Item label={'小学生'}>
                        <Input type='text'/>
                    </Form.Item>
                    <Form.Item label={'大学生'}>
                        <Input type='text'/>
                    </Form.Item>
                    <Form.Item label={'大学生'}>
                        <Input type='text'/>
                    </Form.Item>
                    <Form.Item label={'大学生'}>
                        <Input type='text'/>
                    </Form.Item>
                    <Form.Item label={'大学生'}>
                        <Input type='text'/>
                    </Form.Item>
                    <Form.Item label={'大学生'}>
                        <Input type='text'/>
                    </Form.Item>
                    <Row>
                        <Col>
                            123
                        </Col>
                    </Row>
                </Form>
                <Form layout="vertical">
                    <Form.Item>
                        <Input type='text'/>
                    </Form.Item>
                    <Form.Item>
                        <Input type='text'/>
                    </Form.Item>
                </Form>
                <Form>
                    <Form.Item>
                        <Input type='text'/>
                    </Form.Item>
                    <Form.Item>
                        <Input type='text'/>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
}

export default Antd