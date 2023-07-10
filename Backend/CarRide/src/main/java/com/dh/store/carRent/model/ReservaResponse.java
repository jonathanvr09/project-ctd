package com.dh.store.carRent.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.sql.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReservaResponse {
    private Date fechaInicio;
    private Date fechaFin;
    private UsuarioModel idUsuario;
    private VehiculoModel idVehiculo;
    private MedioPagoModel idMedioPago;
    private EstadoReservaModel idEstadoReserva;
}
