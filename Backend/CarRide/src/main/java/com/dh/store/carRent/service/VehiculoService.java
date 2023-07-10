package com.dh.store.carRent.service;

import com.dh.store.carRent.model.VehiculoModel;
import java.util.ArrayList;

public interface VehiculoService {
    public ArrayList<VehiculoModel> listar();
    public ArrayList<VehiculoModel> listarById(String placa);
    public VehiculoModel crear(VehiculoModel vehiculo);
    boolean eliminar(String placa);
}
