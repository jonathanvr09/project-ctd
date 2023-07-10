package com.dh.store.carRent.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Data
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "estado_reserva")
public class EstadoReservaModel  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_estado_reserva", nullable = false)
    private Long idEstado;
    private String estado;
    @OneToMany(mappedBy = "idEstadoReserva")
    private Set<ReservaModel> reservas = new HashSet<>();
    private static final long serialVersionUID = -7584322451851535262L;
}
