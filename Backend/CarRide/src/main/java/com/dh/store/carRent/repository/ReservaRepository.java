package com.dh.store.carRent.repository;

import com.dh.store.carRent.model.ReservaModel;
import com.dh.store.carRent.model.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservaRepository extends JpaRepository<ReservaModel, Long> {

    @Modifying
    @Query(value= "get from reserva r where r.id=:id", nativeQuery = true)
    void listarById(@Param("id")Long id);
}
