import { Injectable } from "@angular/core";
import { Produto } from "../models/produto";

@Injectable()

export class ProdutoService {

    produtos: Produto[];

    constructor() {

        this.produtos = [
            {
                id: 1,
                nome: 'teste 1',
                ativo: true,
                valor: 100,
                imagem: 'gopro.jpg'
            },
            {
                id: 2,
                nome: 'teste 2',
                ativo: true,
                valor: 100,
                imagem: 'laptop.jpg'
            },
            {
                id: 3,
                nome: 'teste 3',
                ativo: true,
                valor: 100,
                imagem: 'mouse.jpg'
            },
            {
                id: 4,
                nome: 'teste 4',
                ativo: true,
                valor: 100,
                imagem: 'teclado.jpg'
            },
            {
                id: 5,
                nome: 'teste 5',
                ativo: true,
                valor: 100,
                imagem: 'headset.jpg'
            },
            {
                id: 6,
                nome: 'teste 6',
                ativo: false,
                valor: 100,
                imagem: 'celular.jpg'
            }
        ];
    }

    obterTodos(estado: string): Produto[]{
        
        if(estado === 'ativos'){
            return this.produtos.filter(produto => produto.ativo);
        }

        return this.produtos;
    }
    
    obterPorId(id: number): Produto {
        return this.produtos.find(produtos => produtos.id == id);
    }

}