package com.backend.yogesh.Service;

import com.backend.yogesh.dto.request.GiftRequest;
import com.backend.yogesh.dto.response.BasicResponse;
import com.backend.yogesh.dto.response.GiftResponse;

public interface GiftService {
    BasicResponse<GiftResponse> getAllGifts();
    GiftResponse createGift(GiftRequest request);
    BasicResponse<GiftResponse> deletegift(String id);
    GiftResponse updateGift(String id,GiftRequest request);
}