package com.backend.yogesh.dto.request;

import com.backend.yogesh.model.Gift;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class CartRequest
{
    private int amount;
    private Gift gift;
}