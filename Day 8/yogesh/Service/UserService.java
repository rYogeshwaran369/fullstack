package com.backend.yogesh.Service;

import com.backend.yogesh.dto.request.UserRequest;
import com.backend.yogesh.dto.response.BasicResponse;
import com.backend.yogesh.dto.response.UserResponse;

public interface UserService {
     BasicResponse<UserResponse> getAllUser();
     BasicResponse<UserResponse> deleteuser(String id);
     UserResponse updateUser(String id,UserRequest request);
}