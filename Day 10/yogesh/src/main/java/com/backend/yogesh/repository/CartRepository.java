package com.backend.yogesh.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.yogesh.model.Cart;
import com.backend.yogesh.model.Gift;

@Repository
public interface CartRepository extends JpaRepository<Cart, String> {
   
}