package com.dh.store.carRent.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import java.io.Serializable;
import java.sql.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "reserva")
public class ReservaModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "fecha_inicio")
    private Date fechaInicio;
    @Column(name = "fecha_fin")
    private Date fechaFin;
    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private UsuarioModel idUsuario;
    @ManyToOne
    @JoinColumn(name = "id_vehiculo")
    private VehiculoModel idVehiculo;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_medio_pago")
    private MedioPagoModel idMedioPago;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_estado_reserva")
    private EstadoReservaModel idEstadoReserva;

    private static final long serialVersionUID = -3017985966625103805L;
}
