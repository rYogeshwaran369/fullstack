package com.backend.yogesh.Service;


import com.backend.yogesh.dto.request.CartRequest;
import com.backend.yogesh.dto.response.BasicResponse;
import com.backend.yogesh.dto.response.CartResponse;

public interface CartService {
    BasicResponse<CartResponse> getAllCart(); 
    CartResponse createCart(CartRequest request);
}