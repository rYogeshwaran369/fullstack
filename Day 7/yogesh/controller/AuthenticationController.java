package com.backend.yogesh.controller;
import com.backend.yogesh.Service.AuthenticationService;
import com.backend.yogesh.dto.request.LoginRequest;
import com.backend.yogesh.dto.request.RegisterRequest;
import com.backend.yogesh.dto.response.LoginResponse;
import com.backend.yogesh.dto.response.RegisterResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import static com.backend.yogesh.Utils.myconstant.LOGIN;
import static com.backend.yogesh.Utils.myconstant.REGISTER;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) {
        RegisterResponse response = new RegisterResponse();
        try {
            response = authenticationService.register(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch(Exception e) {
            response.setMessage("Something went Wrong!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    @PostMapping(LOGIN)
    public ResponseEntity <LoginResponse> login(@RequestBody LoginRequest request){
        LoginResponse response=new LoginResponse();
        try{
            response=authenticationService.login(request);
            return new ResponseEntity<>(response,ACCEPTED);
        }catch(Exception e){
            System.out.println(e);
            response.setMessage("Something went wrong!!!!!!!!!!!");
            response.setToken("");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
}
