package com.backend.yogesh.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.yogesh.model.User; 

public interface UserRepository extends JpaRepository<User,String>{
    Optional<User> findByEmail(String email);
}
