/*package com.dh.store.carRent.service.impl;

import com.dh.store.carRent.dto.AuthenticationResponse;
import com.dh.store.carRent.dto.LoginRequest;
import com.dh.store.carRent.dto.SignUpRequest;
import com.dh.store.carRent.jwt.JwtService;
import com.dh.store.carRent.service.AuthenticationService;
import com.dh.store.carRent.service.UsuarioService;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final UsuarioService usuarioService;
    private final JwtService jwtService;

    @Override
    public AuthenticationResponse login(LoginRequest loginRequest) {

        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(),
                        loginRequest.getPassword()));

        String jwt =jwtService
                .generateToken((UserDetails) authentication.getPrincipal());

        return AuthenticationResponse.builder()
                .jwt(jwt)
                .build();
    }

    @Override
    public AuthenticationResponse signUp(SignUpRequest signUpRequest) {
        UserDetails userDetails = usuarioService.createUser(signUpRequest);
        return AuthenticationResponse.builder()
                .jwt(jwtService.generateToken(userDetails))
                .build();
    }
}

 */
