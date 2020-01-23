package com.crud.api.controles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.api.documento.Usuario;
import com.crud.api.servicos.UsuarioService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path="/api/usuarios")
public class UsuarioControle {

	@Autowired
	private UsuarioService usuarioservice;
	
	@GetMapping
	public ResponseEntity< List< Usuario > > listarTodos(){
		return ResponseEntity.ok(this.usuarioservice.listarTodos());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Usuario> listarPorId(@PathVariable(name = "id") String id){
		return ResponseEntity.ok(this.usuarioservice.listarPorId(id));
	}
	
	@PostMapping
	public ResponseEntity<Usuario> cadastrar(@RequestBody Usuario usuario){
		return ResponseEntity.ok(this.usuarioservice.cadastrar(usuario));
	}
	
	@PutMapping(path="/{id}")
	public ResponseEntity<Usuario> alterar(@PathVariable(name = "id") String id,@RequestBody Usuario usuario){
		usuario.setId(id);
		return ResponseEntity.ok(this.usuarioservice.alterar(usuario));
	}
	
	@DeleteMapping(path="/{id}")
	public ResponseEntity<Integer> deletar(@PathVariable(name = "id") String id){
		this.usuarioservice.remover(id);
		return ResponseEntity.ok(1);
	}
}

