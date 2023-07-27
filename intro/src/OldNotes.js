import React, { Component } from 'react'
import { Col,Container,Row, ListGroup,ListGroupItem } from 'reactstrap'
import FreeNavi from'./FreeNavi.js'

import Ghost from './Ghost.js'

export default class OldNotes extends Component {

  render() {
    return (
      <div>
         <Container>
            <Row>
                    <FreeNavi></FreeNavi>
            </Row>
            <Row>
            <Col xs="3">
                <ListGroup>
                    <h2>Geçmiş Notlar</h2>
                    <ListGroupItem>

                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col xs="9">
            <Ghost></Ghost>
            </Col>
            </Row>

           </Container>
      </div>
    )
  }
}
