package com.spring.web.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.web.entities.Contact;

@Repository
public interface ContactRepo extends JpaRepository<Contact,String>{
	Optional<Contact> findById(String id);
}
