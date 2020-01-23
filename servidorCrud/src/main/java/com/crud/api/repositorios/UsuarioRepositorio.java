package com.crud.api.repositorios;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.crud.api.documento.Usuario;

public interface UsuarioRepositorio extends MongoRepository<Usuario, String> {

}
