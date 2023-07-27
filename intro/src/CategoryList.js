import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { HiBarsArrowUp} from 'react-icons/hi2';
import './Category.css';
import { Link } from 'react-router-dom';

export default class CategoryList extends Component {
  state = {
    categories: [],
  };

  getCategories = () => {
    fetch('http://localhost:3000/categories')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ categories: data });
        this.props.changeCategory(null);
      });
  };

  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <div>
        <br></br>
        <Link to="/home"> <HiBarsArrowUp className="icon" onClick={this.getCategories} /><h4 id="baslik">{this.props.info.title}</h4> </Link>
        
        
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              className="list"
              active={
                category.categoryName === this.props.currentCategory
              }
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
