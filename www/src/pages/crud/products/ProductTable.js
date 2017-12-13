import React from 'react'
import { Icon, Menu, Table, Button } from 'semantic-ui-react'

const ProductTable = (props) => (

  <Table celled size='small' color={'blue'}>
  
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Codigo</Table.HeaderCell>
        <Table.HeaderCell>Descripcion</Table.HeaderCell>
        <Table.HeaderCell>Precio</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {
          // console.log("productTable",props.products) 
          // props.products &&
          props.products.map((product, idx) => (
            <Table.Row key={idx}>
                <Table.Cell>{product.code}</Table.Cell>
                <Table.Cell>{product.description}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                
                <Table.Cell collapsing textAlign='center'>
                  
                  {/* <Button animated='vertical' onClick={() => props.handleDelete(product.id)}>
                    <Button.Content hidden >Delete</Button.Content>
                    <Button.Content visible>
                      <Icon name='trash'  />
                    </Button.Content>
                  </Button>

                  <Button animated='vertical' onClick={() => props.handleOne(product.id)}>
                    <Button.Content hidden >Load</Button.Content>
                    <Button.Content visible>
                      <Icon name='heart'  />
                    </Button.Content>
                  </Button> */}

                  <Button icon onClick={() => props.handleDelete(product)}>
                    <Icon name='window close' />
                  </Button>
                  
                  <Button icon onClick={() => props.handleOne(product)}>
                    <Icon name='like outline' />
                  </Button>

                </Table.Cell>

            </Table.Row>
          ))
        }
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='left chevron' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='right chevron' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default ProductTable