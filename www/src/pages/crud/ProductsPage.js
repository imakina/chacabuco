import React, { Component } from "react";
import { 
  Form, 
  Input, 
  Button, 
  Segment, 
  Icon, 
  Message,
} from 'semantic-ui-react'
import Title from '../../components/Title';

class Products extends Component {

  render() {

    return (
      <div>

        <Title title="Products" subtitle="Items para el armado de combos">

          <Segment>
            <Form fluid>
              <Form.Field>
                <label>Code</label>
                <Input placeholder='Codigo' />
              </Form.Field>
              <Form.Field>
                <label>Descripcion</label>
                <Input placeholder='Descripcion' />
              </Form.Field>
              <Form.Field>
                <label>Price</label>
                <Input placeholder='Price' />
              </Form.Field>

              <Button.Group widths='2'>
                <Button basic primary type='submit'>Guardar</Button>
                <Button basic color='red'> Cancelar</Button>
              </Button.Group>

            </Form>

            <Message icon>
              <Icon name='circle notched' loading />
              <Message.Content>
                <Message.Header>Just one second</Message.Header>
                We are fetching that content for you.
              </Message.Content>
            </Message>

          </Segment>

        </Title>

    </div>    
    );
  }
}

export default Products;
