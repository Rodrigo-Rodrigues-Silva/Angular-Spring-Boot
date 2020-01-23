package com.crud.api.servicos;

import java.util.List;

import com.crud.api.documento.Usuario;

public interface UsuarioService {
	List<Usuario> listarTodos();
	
	Usuario listarPorId(String id);
	
	Usuario cadastrar(Usuario usuario);
	
	Usuario alterar(Usuario usuario);
	
	void remover (String id);
}
