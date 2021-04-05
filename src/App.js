import logo from './logo.svg';
import './App.css';
import button, {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Butuon, Alert,Breadcrumb, Card, Form} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Form>
              <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" plcaeaholder="Example@gmail.com"/>
                  <Form.Text className="text-muted">
                    we'll never share your email address, trust us!
                  </Form.Text>
              </Form.Group>
          </Form>
          <Card className="mb-3" style={{color: "#800"}}>
              <Card.Img src={"https://jooinn.com/images/little-28.jpg"}/>
              <Card.Body>
                  <Card.Title>
                      Card Example
                  </Card.Title>
                  <Card.Text>
                      This is an example of react boostrap cards
                  </Card.Text>
                  <Button variant="primary">Read more</Button>
              </Card.Body>
          </Card>
          <Breadcrumb>
              <Breadcrumb.Item>Test</Breadcrumb.Item>
              <Breadcrumb.Item>Test1</Breadcrumb.Item>
              <Breadcrumb.Item active>Test2</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="success">This is a Button</Alert>
          <Button>Test Button</Button>
      </header>
    </div>
  );
}

export default App;
