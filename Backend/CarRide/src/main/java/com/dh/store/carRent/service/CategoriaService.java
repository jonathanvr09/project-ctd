package com.dh.store.carRent.service;

import com.dh.store.carRent.model.CategoriaModel;
import java.util.ArrayList;

public interface CategoriaService {
    public ArrayList<CategoriaModel> listar();
    public ArrayList<CategoriaModel> listarById(Long id);
    public CategoriaModel crear(CategoriaModel categoria);
    boolean eliminar(Long id);
}
