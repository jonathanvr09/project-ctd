package com.dh.store.carRent.service;

import com.dh.store.carRent.model.TipoUsuarioModel;
import java.util.ArrayList;

public interface TipoUsuarioService {
    ArrayList<TipoUsuarioModel> listar();
    ArrayList<TipoUsuarioModel> listarById(Long id);
    TipoUsuarioModel crear(TipoUsuarioModel tipoUsuario);
    void eliminar(Long id);
}
