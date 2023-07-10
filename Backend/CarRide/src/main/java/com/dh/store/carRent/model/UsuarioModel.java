package com.dh.store.carRent.model;

import jakarta.persistence.*;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import lombok.Data;

@Data
@Getter
@Setter
@Entity
@Table(name = "usuario")
public class UsuarioModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario", nullable = false)
    private Long idUsuario;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;
    private String contrasenia;
    private String direccion;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_tipo_usuario")
    private TipoUsuarioModel tipousuario;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_estado_usuario")
    private EstadoUsuarioModel estadousuario;

    @OneToMany(mappedBy = "idUsuario")
    private Set<ReservaModel> reservas = new HashSet<>();

    private static final long serialVersionUID = -5703037506892808493L;
}
