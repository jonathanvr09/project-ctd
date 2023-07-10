package com.dh.store.carRent.service;

import com.dh.store.carRent.dto.SignUpRequest;
import com.dh.store.carRent.model.UsuarioModel;

import java.util.ArrayList;
import java.util.List;

public interface UsuarioService {
    public ArrayList<UsuarioModel> listar();
    public void listarById(Long idUsuario);

    public UsuarioModel usuarioByEmailPassword(String email, String contrasenia);
    UsuarioModel crear(UsuarioModel usuario);
    public void eliminar(Long idUsuario);
}
