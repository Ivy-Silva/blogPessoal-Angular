import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  getAllPostagens(){
    return this.http.get('http://31.220.57.14:8080/postagens')
  }

}

// CRUD - Create, Read, Update, Delete
  // End point: Declarar no meu service, todos os pontos de contato do meu service, utilizando todos os pontos de contato de uma API (CRUD)
  // CREATE: get
  // READ: post
  // UPDATE: put
  // DELETE: delete