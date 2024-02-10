package com.backend.yogesh.Service.Implements;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import com.backend.yogesh.Service.AuthenticationService;
import com.backend.yogesh.Utils.JwtUtil;
import com.backend.yogesh.dto.request.LoginRequest;
import com.backend.yogesh.dto.request.RegisterRequest;
import com.backend.yogesh.dto.response.LoginResponse;
import com.backend.yogesh.dto.response.RegisterResponse;
import com.backend.yogesh.enumaretor.Role;
import com.backend.yogesh.model.User;
import com.backend.yogesh.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.var;


@Service
@RequiredArgsConstructor
// @SuppressWarnings("null")
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepository userRepository;
    private final JwtUtil jwtutil;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    @Override
    public RegisterResponse register(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if (isUserExists.isPresent()) {
            return RegisterResponse.builder()
                .message("User with email id " + request.getEmail() + " already exists")
                .build();
        }
        var user = User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(Role.USER)
            .build();
        userRepository.save(user);
        return RegisterResponse.builder()
            .message("User created successfully")
            .build();
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        // TODO Auto-generated method stub
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user=userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token=jwtutil.generateToken(user);
        return LoginResponse.builder()
        .message("User logged in Suuccessfully")
        .token(token)
        .build();
        
    }
    
}