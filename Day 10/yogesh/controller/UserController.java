package com.backend.yogesh.controller;

import org.springframework.web.bind.annotation.RestController;
import com.backend.yogesh.Service.UserService;
import com.backend.yogesh.Utils.myconstant;
import com.backend.yogesh.dto.request.UserRequest;
import com.backend.yogesh.dto.response.BasicResponse;
import com.backend.yogesh.dto.response.UserResponse;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import static com.backend.yogesh.Utils.myconstant.LIST;
import static com.backend.yogesh.Utils.myconstant.USERS;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping(USERS)
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @GetMapping(LIST)
    public ResponseEntity<BasicResponse<UserResponse>> create(){
        BasicResponse<UserResponse> response=new BasicResponse<>();
        try
        {
            response=userService.getAllUser();
            return new ResponseEntity<>(response,HttpStatus.OK);
        }
        catch(Exception e)
        {
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
    }



@PutMapping(myconstant.UPDATEUSER + "/{userid}")
public ResponseEntity<BasicResponse<UserResponse>> updateuser(@PathVariable String userid, @RequestBody UserRequest userRequest) {
    BasicResponse<UserResponse> response = new BasicResponse<>();
    try {
        UserResponse updateduserResponse = userService.updateUser(userid, userRequest);
                return new ResponseEntity<>(response, HttpStatus.OK);
    } catch (Exception e) {
        response.setMessage("Failed to update gift: " + e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
    @DeleteMapping(myconstant.DELETEUSER+"/{userid}")
    public ResponseEntity<BasicResponse<UserResponse>> deleteUser(@PathVariable String userid) {
        BasicResponse<UserResponse> response = new BasicResponse<>();
        try {
            BasicResponse<UserResponse> deletedUserResponse = userService.deleteuser(userid);
            response.setMessage(deletedUserResponse.getMessage());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete User: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
