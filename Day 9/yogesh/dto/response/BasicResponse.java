package com.backend.yogesh.dto.response;

import java.util.Collections;
import java.util.List;

import com.backend.yogesh.model.Gift;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BasicResponse<T> {
    private String message;

    @Builder.Default
    private List<T> data=Collections.emptyList();

    public void setData(Gift data2) {
    }
}