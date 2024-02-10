package com.backend.yogesh.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.yogesh.model.Gift;

@Repository
public interface GiftRepository extends JpaRepository<Gift, String> {
   
}