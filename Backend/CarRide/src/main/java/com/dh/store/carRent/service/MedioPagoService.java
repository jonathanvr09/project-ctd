package com.dh.store.carRent.service;

import com.dh.store.carRent.model.MedioPagoModel;
import java.util.ArrayList;

public interface MedioPagoService {
    ArrayList<MedioPagoModel> listar();
    MedioPagoModel crear(MedioPagoModel medioPago);
}
