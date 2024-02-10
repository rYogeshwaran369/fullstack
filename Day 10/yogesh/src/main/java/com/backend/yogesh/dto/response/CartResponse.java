package com.backend.yogesh.dto.response;

import java.util.List;
import java.util.Collections; 

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.backend.yogesh.model.Gift;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CartResponse 
{
    private String message;
    private int amount;
    private Gift gift;
}
