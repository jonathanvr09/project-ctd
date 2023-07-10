package com.dh.store.carRent.controller;

import com.dh.store.carRent.model.UsuarioModel;
import com.dh.store.carRent.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public ArrayList<UsuarioModel> listar(){
        return usuarioService.listar();
    }

    @GetMapping("/login")
    public ResponseEntity<UsuarioModel> usuarioByEmailPassword(@RequestParam(name = "email") String email, @RequestParam(name = "contrasenia") String contrasenia){
        UsuarioModel usuario = usuarioService.usuarioByEmailPassword(email, contrasenia);
        if(usuario ==null){
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(usuario);
        }else{
            return ResponseEntity.status(HttpStatus.OK).body(usuario);
        }
    }

    @PostMapping
    public UsuarioModel crear(@RequestBody UsuarioModel usuario){
        return this.usuarioService.crear(usuario);
    }

    @DeleteMapping("/{id_usuario}")
    public ResponseEntity<String> eliminar(@PathVariable("id_usuario") Long idUsuario) {
        try{
            this.usuarioService.eliminar(idUsuario);
            return ResponseEntity.ok("usuario eliminado correctamente por Id");
        }catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al eliminar el usuario por Id");
        }
    }

    @GetMapping("/{id_usuario}")
    public ResponseEntity<String> listarById(@PathVariable("id_usuario") Long idUsuario) {
        try{
            this.usuarioService.listarById(idUsuario);
            return ResponseEntity.ok("Id usuario listado correctamente");
        }catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al listar el Id usuario");
        }
    }  // !!!!!!!!!!!!!!   NO IMPRIME POR CONSOLA EL ARREGLO DEL USUARIO X ID
}
