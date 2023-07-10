package com.dh.store.carRent.service;

import com.dh.store.carRent.dto.RangoFechasDTO;
import com.dh.store.carRent.model.ReservaModel;
import com.dh.store.carRent.model.ReservaResponse;
import com.dh.store.carRent.model.UsuarioModel;
import java.util.ArrayList;
import java.util.List;

public interface ReservaService {
    ReservaModel crear (ReservaModel reservaModel);
    ArrayList<ReservaModel> listar();
    ReservaModel listarById(Long id);
    List<ReservaResponse> consultarReservaRangoFechas(RangoFechasDTO rangoFechasDTO);
}
