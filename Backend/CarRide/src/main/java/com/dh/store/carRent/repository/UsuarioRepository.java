package com.dh.store.carRent.repository;

import com.dh.store.carRent.model.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long> {
    @Query("SELECT t FROM UsuarioModel t WHERE t.email=?1 and t.contrasenia=?2")
    UsuarioModel usuarioByEmailPassword(String email, String contrasenia);
}
