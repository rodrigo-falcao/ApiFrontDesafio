import axios from "axios";

const BASE_URL = "https://api-back-desafio.vercel.app/doc/"

export class LivrosService{
    static getLivros(){
        return axios.get(BASE_URL+'/livros/obter/livro');
    }

    static getLivro(id){
        return axios.get(`${BASE_URL}/livros/${id}`);
    }

    static createLivro(body){
        return axios.post(`${BASE_URL}/livros/criar`,body);
    }

    static updateLivro(id,body){
        return axios.put(`${BASE_URL}/livros/editar/${id}`,body);
    }

    static deleteLivro(id){
        return axios.delete(`${BASE_URL}/livros/deletar/${id}`);
    }
    
}