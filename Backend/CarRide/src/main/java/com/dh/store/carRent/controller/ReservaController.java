package com.dh.store.carRent.controller;

import com.dh.store.carRent.dto.RangoFechasDTO;
import com.dh.store.carRent.exception.MessageReturn;
import com.dh.store.carRent.model.ReservaModel;
import com.dh.store.carRent.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

@RestController
@RequestMapping("/reserva")
public class ReservaController {

    @Autowired
    ReservaService reservaService;

    public ReservaController(ReservaService reservaService) {
        this.reservaService = reservaService;
    }

    @GetMapping
    public ArrayList<ReservaModel> listar(){
        return reservaService.listar();
    }

    @PostMapping
    public ReservaModel crear(@RequestBody ReservaModel reservaModel) {
        return this.reservaService.crear(reservaModel);
    }

    @GetMapping("/{id}/")
    public ResponseEntity<ReservaModel> listarById(@PathVariable(name= "id") Long id) {
        return new ResponseEntity<>(reservaService.listarById(id), HttpStatus.OK);
    }

    @PostMapping("/rango-fechas")
    public ResponseEntity<?> consultarReservaRangoFechas(@RequestBody RangoFechasDTO rangoFechasDTO){
        try{
            return ResponseEntity.ok(reservaService.consultarReservaRangoFechas(rangoFechasDTO));
        }catch (RuntimeException ex){
            return new ResponseEntity<>(
                    MessageReturn.builder().errror(ex.getMessage()),
                    HttpStatus.BAD_REQUEST);
        }
    }
}
