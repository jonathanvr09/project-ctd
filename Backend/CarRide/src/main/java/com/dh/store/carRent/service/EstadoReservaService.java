package com.dh.store.carRent.service;

import com.dh.store.carRent.model.EstadoReservaModel;
import java.util.ArrayList;

public interface EstadoReservaService {
    ArrayList<EstadoReservaModel> listar();
    EstadoReservaModel crear(EstadoReservaModel estadoReserva);
}
