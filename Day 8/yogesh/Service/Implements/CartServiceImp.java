package com.backend.yogesh.Service.Implements;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

import com.backend.yogesh.model.Cart;
import com.backend.yogesh.model.Gift;
import com.backend.yogesh.repository.CartRepository;
import com.backend.yogesh.repository.GiftRepository;
import com.backend.yogesh.Service.CartService;
import com.backend.yogesh.Service.GiftService;
import com.backend.yogesh.dto.request.CartRequest;
import com.backend.yogesh.dto.request.GiftRequest;
import com.backend.yogesh.dto.response.BasicResponse;
import com.backend.yogesh.dto.response.CartResponse;
import com.backend.yogesh.dto.response.GiftResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CartServiceImp implements CartService {
    private final CartRepository cartRepo;

    @Override
    public BasicResponse<CartResponse> getAllCart() 
    {
        List<Cart> carts = cartRepo.findAll();
        List<CartResponse> cartResponses = carts.stream()
            .map(cart -> CartResponse.builder()
                .amount(cart.getAmount())
                // .gift(cart.getGift())
                .build())
            .collect(Collectors.toList());
        return BasicResponse.<CartResponse>builder()
            .message("success!")
            .data(cartResponses)
            .build();
    }

    private final CartRepository cartRepository;
    @Override
    public CartResponse createCart(CartRequest request) {
        var cart= Cart.builder()
            .amount(request.getAmount())
            .build();
        cartRepository.save(cart);
        return CartResponse.builder()
            .message("Gift created successfully")
            .build();
    }

}