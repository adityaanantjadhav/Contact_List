package com.spring.web.entities;

import org.hibernate.annotations.UuidGenerator;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_DEFAULT)	//Means when we create a JSON object of these it is gonna include the only attribute which have values or not empty.
@Table(name="contacts")
public class Contact {
	
	@Id
	@UuidGenerator
	@Column(name="id" ,unique=true,updatable=false)
	private String id;
	
	private String name;
	
	private String email;
	
	private String title;
	
	private String phone;
	
	private String Address;
	
	private String status;
	
	private String image;

	public Contact() {
		
	}

	public Contact(String id, String name, String email, String title, String phone, String address, String status,
			String image) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.title = title;
		this.phone = phone;
		Address = address;
		this.status = status;
		this.image = image;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	
}
