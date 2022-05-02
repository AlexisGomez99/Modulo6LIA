import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTxt: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch() {
    this.props.doSearch(this.state.searchTxt);
  }
  handleClick(e, itemClicked) {
    this.props.handler(itemClicked);
  }
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#" onClick={(e) => this.handleClick(e, 0)}>
              Curso React
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#" onClick={(e) => this.handleClick(e, 1)}>
                  Crear Persona
                </Nav.Link>
                <Nav.Link href="#" onClick={(e) => this.handleClick(e, 2)}>
                  Lista ListarEstudiantes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Legajo..."
                className="me-2"
                aria-label="Search"
                onChange={(e) => this.setState({ searchTxt: e.target.value })}
              />
              <Button variant="outline-success" onClick={this.handleSearch}>
                Buscar
              </Button>
            </Form>
          </Container>
        </Navbar>
      </div>
    );
  }
}
