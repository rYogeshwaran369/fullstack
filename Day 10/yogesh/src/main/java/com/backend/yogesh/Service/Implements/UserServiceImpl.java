package com.backend.yogesh.Service.Implements;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import com.backend.yogesh.model.User;
import com.backend.yogesh.repository.UserRepository;
import com.backend.yogesh.Service.UserService;
import com.backend.yogesh.dto.request.UserRequest;
import com.backend.yogesh.dto.response.BasicResponse;
import com.backend.yogesh.dto.response.UserResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepo;
    @Override
    public BasicResponse <UserResponse> getAllUser(){
        List<User> users=userRepo.findAll();
        List<UserResponse> userResponses=users.stream().map(user-> UserResponse.builder()
        .id(user.getId())
        .username(user.getUsername())
        .role(user.getRole())
        .build()).collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder().message("success!").data(userResponses).build();   
    }


    @Override
    public BasicResponse deleteuser(String userId) {
        if (userRepo.existsById(userId)) {
            userRepo.deleteById(userId);
            return BasicResponse.builder()
                .message("User deleted successfully")
                .build();
        } else {
            return BasicResponse.builder()
                .message("User not found with ID: " + userId)
                .build();
        }
    }
    

    @Override
    public UserResponse updateUser(String userId, UserRequest request) {
        if (userRepo.existsById(userId)) {
            User existingUser = userRepo.findById(userId).orElse(null);
            if (existingUser != null) {
                existingUser.setName(request.getUsername());
                existingUser.setEmail(request.getEmail());
                userRepo.save(existingUser);
                return UserResponse.builder()
                    .message("User updated successfully")
                    .build();
            } else {
                return UserResponse.builder()
                    .message("Failed to update user. User not found with ID: " + userId)
                    .build();
            }
        } else {
            return UserResponse.builder()
                .message("Failed to update user. User not found with ID: " + userId)
                .build();
        }
    }
    

}