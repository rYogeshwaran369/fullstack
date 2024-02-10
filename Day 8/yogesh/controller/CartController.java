package com.backend.yogesh.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

import com.backend.yogesh.Service.CartService;
// import com.backend.yogesh.Service.GiftService;
import com.backend.yogesh.Utils.myconstant;
import com.backend.yogesh.dto.request.CartRequest;
// import com.backend.yogesh.dto.request.GiftRequest;
import com.backend.yogesh.dto.response.BasicResponse;
import com.backend.yogesh.dto.response.CartResponse;
// import com.backend.yogesh.dto.response.GiftResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping(myconstant.CART)
@RequiredArgsConstructor
public class CartController {
    private final CartService cartService;
    @GetMapping(myconstant.SHOWCART)
    public ResponseEntity<BasicResponse<CartResponse>> create(){
        BasicResponse<CartResponse> response=new BasicResponse<>();
        try{
            response=cartService.getAllCart();
            return new ResponseEntity<>(response,HttpStatus.OK);
        }
        catch(Exception e){
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
    }

@PostMapping(myconstant.ADDCART)
    public ResponseEntity<CartResponse> createGift(@RequestBody CartRequest request) {
        CartResponse response = new CartResponse();
        try {
            response = cartService.createCart(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch(Exception e) {
            response.setMessage("Something went Wrong!");
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // @DeleteMapping(myconstant.DELETECART+"/{cartid}")
    // public ResponseEntity<BasicResponse<CartResponse>> deleteUser(@PathVariable String Cartid) {
    //     BasicResponse<CartResponse> response = new BasicResponse<>();
    //     try {
    //         BasicResponse<CartResponse> deletedCartResponse = cartService.deletecart(Cartid);
    //         response.setMessage(deletedCartResponse.getMessage());
    //         return new ResponseEntity<>(response, HttpStatus.OK);
    //     } catch (Exception e) {
    //         response.setMessage("Failed to delete Cart: " + e.getMessage());
    //         return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
}
