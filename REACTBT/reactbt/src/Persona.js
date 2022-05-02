import React, { Component } from "react";
import "./Persona.css";
let estudiante = {
  nombre: "Alexis",
  apellido: "Gomez",
  email: "ralexisge@gmail.com",
  dni: "42456256",
  materias: [
    { materia: "Matematicas", hora: "4 horas" },
    { materia: "Base de datos", hora: "6 horas" },
  ],
};

export default class Persona extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estudiante: estudiante,
      nuevaMateria: {},
    };
  }

  handlerChange = (event) => {
    const { name, value } = event.target;
    const { nuevaMateria } = this.state;
    console.log(name);
    console.log(value);
    this.setState({ nuevaMateria: { ...nuevaMateria, [name]: value } });
  };
  handlerSumbit = () => {
    const { estudiante, nuevaMateria } = this.state;
    estudiante.materias.push(nuevaMateria);
    this.setState({ estudiante: estudiante });
  };
  render() {
    const { estudiante } = this.state;
    const renderMaterias =
      estudiante.materias &&
      estudiante.materias.map((materia, index) => {
        return (
          <tr key={index}>
            <td>{materia.materia}</td>
            <td>{materia.hora}</td>
          </tr>
        );
      });
    return (
      <div>
        <div className="estiloDiv">
          <p className="estilo">{estudiante.nombre}</p>
          <p className="estilo">{estudiante.apellido}</p>
          <p className="estilo">{estudiante.email}</p>
          <p className="estilo">{estudiante.dni}</p>
        </div>
        <div>
          <label>materia</label>
          <br />
          <input name="materia" onChange={this.handlerChange}></input>
          <br />
          <label>hora</label>
          <br />
          <input name="hora" onChange={this.handlerChange}></input>
          <button onClick={this.handlerSumbit}>Agregar</button>
        </div>
        <div>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
          ></link>
          <table class="table table-dark table-sm">
            <thead>
              <tr>
                <th scope="col">materias</th>
                <th scope="col">horas</th>
              </tr>
            </thead>
            <tbody>{renderMaterias}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
