package com.dh.store.carRent.service.impl;

import com.dh.store.carRent.dto.SignUpRequest;
import com.dh.store.carRent.model.UsuarioModel;
import com.dh.store.carRent.repository.UsuarioRepository;
import com.dh.store.carRent.service.UsuarioService;
import jakarta.transaction.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;

@Service
@Transactional
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    private Logger logger = LoggerFactory.getLogger(UsuarioService.class);
    public UsuarioServiceImpl(UsuarioRepository usuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public ArrayList<UsuarioModel> listar() {
        return (ArrayList<UsuarioModel>) usuarioRepository.findAll();
    }
    @Override
    public void listarById(Long idUsuario) {

    }

    @Override
    public UsuarioModel usuarioByEmailPassword(String email, String contrasenia) {
        return usuarioRepository.usuarioByEmailPassword(email,contrasenia);
    }

    @Override
    public UsuarioModel crear(UsuarioModel usuario) {
        return usuarioRepository.save(usuario);
    }

    @Override
    public void eliminar(Long idUsuario) {
    }

}