import React, { Component } from "react";
import Formulario from "./Formulario";
import ListarEstudiantes from "./ListarEstudiantes";
import Welcome from "./Welcome";

export default class Body extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.itemClicked === 0 && <Welcome />}
        {this.props.itemClicked === 1 && <Formulario />}
        {this.props.itemClicked === 2 && (
          <ListarEstudiantes inputValue={this.props.inputValue} />
        )}
      </>
    );
  }
}
