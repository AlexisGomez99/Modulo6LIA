import React, { Component } from "react";
import "./Formulario.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.handlerSumbit = this.handlerSumbit.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.state = {
      form: {
        nombre: "",
        apellido: "",
        legajo: "",
        materias: [""], // <------
        edad: "",
        carrera: "",
      },
      resultado: "",
      materiaslog: [],
    };
  }

  handlerSumbit(e) {
    fetch("http://localhost:1234/estudiantes", {
      method: "POST",
      body: JSON.stringify({
        nombre: this.state.form.nombre,
        apellido: this.state.form.apellido,
        legajo: this.state.form.legajo,
        materias: [this.state.form.materias], //<-------
        edad: this.state.form.edad,
        carrera: this.state.form.carrera,
      }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.result === "error") {
          this.setState({
            resultado: json.message,
          });
          console.log(this.state.form);
          return;
        }
        this.setState({
          resultado: "El estudiante fue creado con exito!",
        });
      });
  }
  componentDidMount() {
    fetch("http://localhost:1234/materias")
      .then((r) => r.json())
      .then((json) => {
        this.setState({
          materiaslog: json.materias,
        });
      });
  }
  handlerChange(e) {
    let nombre = e.target.name;
    let valor = e.target.value;

    this.setState((state) => ({
      form: {
        ...state.form,
        [nombre]: valor,
      },
    }));
  }
  render() {
    return (
      <div>
        <div className="estilo">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                onChange={this.handlerChange}
                value={this.state.nombre}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="apellido"
                onChange={this.handlerChange}
                value={this.state.apellido}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>N° Legajo</Form.Label>
              <Form.Control
                type="text"
                name="legajo"
                onChange={this.handlerChange}
                value={this.state.legajo}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="text"
                name="edad"
                onChange={this.handlerChange}
                value={this.state.edad}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Carrera</Form.Label>
              <Form.Control
                type="text"
                name="carrera"
                onChange={this.handlerChange}
                value={this.state.carrera}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Materias</Form.Label>
              <Form.Control
                name="materias"
                onChange={this.handlerChange}
                as="select"
              >
                {this.state.materiaslog.map((mat) => (
                  <option value={mat.materia}>{mat.materia}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
          <Button onClick={this.handlerSumbit}>Submit</Button>
          <p>{this.state.resultado}</p>
        </div>
      </div>
    );
  }
}
