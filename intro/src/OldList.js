import React, { Component } from 'react'
import { Input,Button, Label, Table, Col, Container,Row, ListGroup, ListGroupItem} from 'reactstrap'
import FreeNavi from './FreeNavi.js';
import {Link} from 'react-router-dom'
import './GirisYap.css'

export default class OldList extends Component {
    renderCart() {
        return (
          
          <Table  striped>
            <thead>
              <tr>
                <th>Ürün Listesi ~ {new Date().toLocaleDateString()}</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((cartItem) => (
                <tr key={cartItem.product.id}>
                 
                  <td>{cartItem.product.productName}</td>
                 
                  <td>
                  <Input
      id="exampleCheck"
      name="check"
      type="checkbox"
    />
    <Label
      check
      for="exampleCheck"
    >
      Satın Alındı
    </Label>
                  </td>
                  <td>.</td>
                  <td>.</td>
                </tr>
              ))}
            </tbody>
          </Table>
        );
      }
      render() {
        return <div >
           <Container>
            <Row>
                    <FreeNavi></FreeNavi>
            </Row>
            <Row>
            <Col xs="3">
                <ListGroup>
                    <h2>Geçmiş Listeler</h2>
                    <ListGroupItem>

                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col xs="9">
            {this.renderCart()} 
            <Button  className="link"> <Link to="/">Tamamlandı</Link></Button>
            </Col>
            </Row>

           </Container>
           </div>;
        
      }
}
