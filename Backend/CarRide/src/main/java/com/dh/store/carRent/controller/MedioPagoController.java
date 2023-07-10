package com.dh.store.carRent.controller;

import com.dh.store.carRent.model.MedioPagoModel;
import com.dh.store.carRent.service.MedioPagoService;
import com.dh.store.carRent.service.TipoUsuarioService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/mediopago")
public class MedioPagoController {

    @Autowired
    MedioPagoService medioPagoService;
    private Logger logger = LoggerFactory.getLogger(TipoUsuarioService.class);
    public MedioPagoController(MedioPagoService medioPagoService) {
        this.medioPagoService = medioPagoService;
    }

    @GetMapping
    public ArrayList<MedioPagoModel> listar() {
        return medioPagoService.listar();
    }

    @PostMapping
    public MedioPagoModel crear(@RequestBody MedioPagoModel medioPago){
        return this.medioPagoService.crear(medioPago);
    }
}
