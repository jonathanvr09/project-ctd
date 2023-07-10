import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./AsignarRoles.css";
import swal from "sweetalert";

const Pagination = ({ usersPerPage, totalUsers, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

const AsignarRoles = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://18.188.50.174:8080/usuario");
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Error al obtener los datos de usuarios:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (values) => {
    const { searchTerm, email, userType } = values;
    const filteredUsuarios = usuarios.filter(
      (usuario) =>
        usuario.nombre.includes(searchTerm) && usuario.correo.includes(email)
    );

    if (filteredUsuarios.length > 0) {
      let tipoUsuario;
      if (userType === "admin") {
        tipoUsuario = 1;
      } else if (userType === "usuario") {
        tipoUsuario = 2;
      }

      // Lógica para enviar la petición de actualización del tipo de usuario
      try {
        const response = await fetch(
          "http://18.188.50.174:8080/actualizarTipoUsuario",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ tipoUsuario }),
          }
        );

        if (response.ok) {
          swal(
            "Usuario asignado",
            `El usuario ha sido asignado como ${userType}`,
            "success"
          );
        } else {
          swal("Error", "Ocurrió un error al asignar el usuario", "error");
        }
      } catch (error) {
        console.error("Error al actualizar el tipo de usuario:", error);
        swal("Error", "Ocurrió un error al asignar el usuario", "error");
      }
    } else {
      swal(
        "Usuario no encontrado",
        "No se encontró ningún usuario con el correo especificado",
        "warning"
      );
    }

    setCurrentPage(1);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usuarios.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Consulta de Usuarios</h1>
      <Formik
        initialValues={{
          searchTerm: "",
          email: "",
          userType: "admin",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="searchTerm">Término de búsqueda:</label>
          <Field type="text" id="searchTerm" name="searchTerm" />

          <label htmlFor="email">Correo electrónico:</label>
          <Field type="email" id="email" name="email" />

          <div>
            <label htmlFor="userType">Tipo de usuario:</label>
            <div>
              <label>
                <Field type="radio" name="userType" value="admin" />
                Administrador
              </label>
              <label>
                <Field type="radio" name="userType" value="usuario" />
                Usuario
              </label>
            </div>
          </div>

          <button type="submit">Actualizar</button>
        </Form>
      </Formik>

      <h2>Lista de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Tipo de Usuario</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((usuario, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.email}</td>
              <td>{usuario.tipoUsuario || "Registrado"}</td>
              <td>{usuario.estado || "Registrado"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={usuarios.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default AsignarRoles;
