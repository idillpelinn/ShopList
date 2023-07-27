import React, { Component } from "react";
import { Form,Input,  FormGroup, Label, Button } from "reactstrap";
import './UyeOl.css'
import {Link} from 'react-router-dom'

export default class UyeOl extends Component {
  render() {
    return (
      <div >
        <div className="baslik"><h1> <i>ÜYE OL</i></h1></div>
        <div className="uye">
          <Form >
          <FormGroup>
            <Label for="exampleName">Ad</Label>
            <Input
              id="exampleName"
              name="name"
              placeholder="Adınızı giriniz"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSurname">Soyad</Label>
            <Input
              id="exampleSurname"
              name="surname"
              placeholder="Soyadınızı giriniz"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email adresi giriniz."
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Yeni Şifre</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Şifrenizi giriniz."
              type="password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword1">Şifreyi Onaylayın</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Şifrenizi tekrar giriniz."
              type="password"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleDate">Doğum Tarihi</Label>
            <Input
              id="exampleDate"
              name="date"
              placeholder="Doğrum tarihini giriniz."
              type="date"
            />
          </FormGroup>
          
          <Button className="link"> <Link to="/giris" > Üye Ol</Link>
          </Button>

        </Form></div>
        
      </div>
    );
  }
}
