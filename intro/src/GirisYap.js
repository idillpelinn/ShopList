import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "./GirisYap.css";
import {Link} from 'react-router-dom'

export default class GirisYap extends Component {
  render() {
    return (
      <div>
        <div className="baslik">
          <h1> <i>GİRİŞ YAP</i></h1>
        </div>
        <div className="giris">
          <Form>
            <FormGroup>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
              />
              <Label for="exampleEmail">Email</Label>
            </FormGroup>
            <FormGroup>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Şifre"
                type="password"
              />
              <Label for="examplePassword">Şifre</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" /> <Label check>Beni hatırla</Label>
            </FormGroup>
            <Button className="link"> <Link to="/home" > Giriş Yap</Link>
          </Button>
          </Form>
        </div>
      </div>
    );
  }
}
