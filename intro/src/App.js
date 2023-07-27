import CategoryList from "./CategoryList.js";
import Navi from "./Navi.js";
import ProductList from "./ProductList.js";
import { Container, Row, Col } from "reactstrap";
import React, { Component } from "react";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import CartList from "./CartList";
import NotDefteri from "./NotDefteri.js";
import Ghost from "./Ghost.js";
import Sidebar from "./Sidebar.js";
import AnaGiris from "./AnaGiris.js";
import "./App.css";
import UyeOl from "./UyeOl.js";
import GirisYap from "./GirisYap.js";
import FreeNavi from "./FreeNavi.js";
import OldList from "./OldList.js";
import OldNotes from "./OldNotes.js";


export default class App extends Component {
  state = { currentCategory: " ", products: [], cart: [] };

  //ürünleri listelemek için yazılmıştır. Ürünler jsondan alınır.
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  //ürünleri listeleyecek fonksiyonu harekete geçirir.
  componentDidMount() {
    this.getProducts();
  }
  // seçilen ürünleri göstermek için yazılmıştır.
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };
  //sepete ürün eklemek için yazılmıştır.
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quintity += 1;
    } else {
      newCart.push({ product: product, quintity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " Listeye eklendi", 2);
  };

  //sepetten bazı ürünleri silme işlemi yapan fonksiyondur.
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " Listeden çıkarıldı.", 1);
  };

  render() {
    let InfoCategories = { title: "Kategori Listesi" };
    let InfoProduct = { title: "Ürünler" };

    return (
      <div>
        <Container>
          <Routes>
            <Route exact path="/" element={<AnaGiris></AnaGiris>}></Route>
            <Route path="/giris" element={<GirisYap></GirisYap>}></Route>
            <Route path="/uye" element={<UyeOl></UyeOl>}></Route>
            
            <Route
              path="/oldlist"
              element={
                <OldList
                  removeFromCart={this.removeFromCart}
                  cart={this.state.cart}
                ></OldList>
              }
            />
            <Route path="/oldnotes" element={<OldNotes></OldNotes>}></Route>
            <Route
              exact
              path="/home"
              element={
                <Navi
                  removeFromCart={this.removeFromCart}
                  cart={this.state.cart}
                ></Navi>
              }
            ></Route>


<Route
              exact
              path="/not"
              element={
                <FreeNavi
                  removeFromCart={this.removeFromCart}
                  cart={this.state.cart}
                ></FreeNavi>
              }
            ></Route>
            <Route
              path="/category/list"
              element={
                <FreeNavi
                  removeFromCart={this.removeFromCart}
                  cart={this.state.cart}
                ></FreeNavi>
              }
            ></Route>
            <Route
              path="/home/list"
              element={
                <FreeNavi
                  removeFromCart={this.removeFromCart}
                  cart={this.state.cart}
                ></FreeNavi>
              }
            ></Route>
            <Route
              exact
              path="/category"
              element={
                <Navi
                  removeFromCart={this.removeFromCart}
                  cart={this.state.cart}
                ></Navi>
              }
            ></Route>
          </Routes>
          <Row>
            <Col xs="2">
              <Routes>
                <Route
                  exact
                  path="/home"
                  element={<Sidebar info={InfoCategories}></Sidebar>}
                ></Route>

                <Route
                  path="/category"
                  element={
                    <CategoryList
                      currentCategory={this.state.currentCategory}
                      changeCategory={this.changeCategory}
                      info={InfoCategories}
                    ></CategoryList>
                  }
                ></Route>
                <Route path="/list" element={<Ghost />} />
                <Route exact path="/not" element={<Ghost />} />
              </Routes>
            </Col>
            <Col xs="10">
              <Routes>
                <Route
                  exact
                  path="/home"
                  element={
                    <ProductList
                      addToCart={this.addToCart}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={InfoProduct}
                    ></ProductList>
                  }
                />
                <Route
                  exact
                  path="/category"
                  element={
                    <ProductList
                      addToCart={this.addToCart}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={InfoProduct}
                    ></ProductList>
                  }
                />
                <Route
                  path="/category/list"
                  element={
                    <CartList
                      removeFromCart={this.removeFromCart}
                      cart={this.state.cart}
                    ></CartList>
                  }
                />
                <Route
                  path="/home/list"
                  element={
                    <CartList
                      removeFromCart={this.removeFromCart}
                      cart={this.state.cart}
                    ></CartList>
                  }
                />
                <Route
                  exact
                  path="/not"
                  element={<NotDefteri></NotDefteri>}
                ></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
