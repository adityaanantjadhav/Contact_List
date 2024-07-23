package com.spring.web.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.function.BiFunction;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.spring.web.entities.Contact;
import com.spring.web.repository.ContactRepo;
import com.spring.web.constant.Constant;


import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class ContactService {
	
	@Autowired
	private ContactRepo contactRepo;
	
	
	public Page<Contact> getAllContacts(int page,int size){
		return contactRepo.findAll(PageRequest.of(page,size,Sort.by("name")));
	}
	
	
	public Contact getContact(String id) {
		return contactRepo.findById(id).orElseThrow(()->new RuntimeException("contact not found"));
	}
	
	public Contact createContact(Contact contact) {
		return contactRepo.save(contact);
	}
	
	public void deleteContact(Contact contact) {
		contactRepo.delete(contact);
	}
	
	public String uploadPhoto(String id,MultipartFile file) {
		Contact contact=getContact(id);
		String photoUrl=photoFunc.apply(id, file);
		contact.setImage(photoUrl);
		contactRepo.save(contact);
		return photoUrl;
	}
	
	private final Function <String,String> fileExtension =filename-> Optional.of(filename).filter(name->name.contains("."))
			.map(name->"."+name.substring(filename.lastIndexOf(".")+1)).orElse(".png");
	
	
	private final BiFunction <String,MultipartFile,String> photoFunc=(id,image)->{
		
		String filename	=id+fileExtension.apply(image.getOriginalFilename());
		try {
			Path fileStorageLocation =Paths.get(Constant.PHOTO_DIRECTORY).toAbsolutePath().normalize();
			if(!Files.exists(fileStorageLocation)) {
				Files.createDirectories(fileStorageLocation);
			}
			
			Files.copy(image.getInputStream(),fileStorageLocation.resolve(filename),StandardCopyOption.REPLACE_EXISTING);
			
			return ServletUriComponentsBuilder.fromCurrentContextPath()
					.path("/contacts/image/"+filename)
					.toUriString();
		}
		catch(Exception exception) {
			throw new RuntimeException("Unable to save image");
		}
	};

}
