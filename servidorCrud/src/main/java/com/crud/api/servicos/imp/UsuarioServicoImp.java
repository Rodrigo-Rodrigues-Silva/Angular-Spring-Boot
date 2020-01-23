package com.crud.api.servicos.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.api.documento.Usuario;
import com.crud.api.repositorios.UsuarioRepositorio;
import com.crud.api.servicos.UsuarioService;

@Service
public class UsuarioServicoImp implements UsuarioService {

	@Autowired
	private UsuarioRepositorio usuarioRepositorio;
	
	@Override
	public List<Usuario> listarTodos() {

		return this.usuarioRepositorio.findAll();
	}

	@Override
	public Usuario listarPorId(String id) {

		return this.usuarioRepositorio.findById(id).orElse(null);
	}

	@Override
	public Usuario cadastrar(Usuario usuario) {

		return this.usuarioRepositorio.save(usuario);
	}

	@Override
	public Usuario alterar(Usuario usuario) {

		return this.usuarioRepositorio.save(usuario);
	}

	@Override
	public void remover(String id) {
		this.usuarioRepositorio.deleteById(id);
	}

}
