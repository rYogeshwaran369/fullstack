package com.backend.yogesh.Service;

import org.springframework.stereotype.Service;

import com.backend.yogesh.dto.request.LoginRequest;
import com.backend.yogesh.dto.request.RegisterRequest;
import com.backend.yogesh.dto.response.LoginResponse;
import com.backend.yogesh.dto.response.RegisterResponse;


public interface AuthenticationService {

     RegisterResponse register(RegisterRequest request) ;
     LoginResponse login(LoginRequest request);
    
}