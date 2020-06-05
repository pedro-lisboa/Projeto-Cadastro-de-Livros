import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import api from '../../services/api';

import {
   Container,
   Content,
   Header,
   Logos,
   ButtonHeader,
   FormColumn,
   InputColumn,
   InputFile,
   Button
} from "./styles";

import logoImg from '../../assets/logo.svg';
import logoText from '../../assets/logotxt.jpg';

export default class Books extends Component {

   state = {
      autor: "",
      nome: "",
      pagina: "",
      editora: "",
      isbn: "",
      image: "",
      list: [],
      showCadastrar: false
   }

   handleSubmit = async e => {
      e.preventDefault();
      const { autor, nome, pagina, editora, isbn, image, list } = this.state

      const config = {
         header: {
           "Content-Type": "multipart/form-data"
         }
      };

      const input_data = {
         autor,
         nome,
         pagina,
         editora,
         isbn,
      };
   
      const form_data = new FormData();
   
      form_data.append("image", image);
   
      Object.entries(input_data).forEach(([key, value], index) => {
         form_data.append(key, value);
      });
   
      const response = await api.post('/', form_data, config);

      //Com Axios, as informações dos registros ficam dentro do data
      this.setState({
         list: [ ...list, response.data],
         image: '',
         autor: '',
         nome: '',
         pagina: '',
         editora: '',
         isbn: ''
      })
   }    

   handleReset = () => {
      this.setState({
         image: '',
         autor: '',
         nome: '',
         pagina: '',
         editora: '',
         isbn: ''
      })
   }

   hideShowCadastrar = () => {
      const { showCadastrar } = this.state;
      this.setState({
         showCadastrar: !showCadastrar
      })
   }

   render() {

      const { nome, autor, pagina, editora, isbn, list, showCadastrar } = this.state

      return (
         <Container>
            <Content>
               <Header>
                  <Logos>
                     <img src={logoImg} style= {{width: '170px'}} alt="Projeto Livros"/>
                     <img src={logoText} style= {{width: '250px'}} alt="Projeto Livros"/>
                  </Logos>
                     <div>
                        <ButtonHeader onClick={() => this.hideShowCadastrar()} tipo='cadastrar'>
                           Cadastrar
                        </ButtonHeader>
                        <ButtonHeader>
                           <Link to ="/listalivro" style={{textDecoration: 'none', color:'white'}}>
                              Listar
                           </Link>
                        </ButtonHeader>
                     </div>
                  {showCadastrar ?
                     <FormColumn onSubmit={this.handleSubmit} encType="multipart/form-data" method='POST'>
                        <InputFile
                           type="file"
                           name="image"
                           required="required"
                           placeholder="Imagem do livro"
                           onChange = { e => this.setState({ image: e.target.files[0] })}
                        />
                        <InputColumn
                           type="text"
                           name="autor"
                           maxLength = "100"
                           minLength = "3" 
                           required="required"
                           placeholder="Digite o autor do livro"
                           value={autor}
                           onChange = { e => this.setState({ autor: e.target.value })}
                        />
                        <InputColumn
                           type="text"
                           name="nome"
                           maxLength = "100"
                           minLength = "3" 
                           required="required"
                           placeholder="Digite o nome do livro"
                           value={nome}
                           onChange = { e => this.setState({ nome: e.target.value })}
                        />
                        <InputColumn
                           type="number"
                           name="pagina"
                           min = "10"
                           max = "9999"
                           required="required"
                           placeholder="Digite o nº de páginas do livro"
                           value={pagina}                   
                           onChange = { e => this.setState({ pagina: e.target.value })}
                        />
                        <InputColumn
                           type="text"
                           name="editora"
                           maxLength = "100"
                           minLength = "3" 
                           required="required"
                           placeholder="Digite a editora do livro"
                           value={editora}
                           onChange = { e => this.setState({ editora: e.target.value })}
                        />
                        <InputColumn
                           type="string"
                           name="isbn"
                           maxLength = "100"
                           minLength = "3" 
                           required="required"
                           placeholder="Digite o ISBN do livro"
                           value={isbn}
                           onChange = { e => this.setState({ isbn: e.target.value })}
                        />
                        <div>
                           <Button type="submit" tipo="add">
                              Salvar
                              {list[0] !== undefined ? 
                                 <Redirect to ="/listalivro" style={{textDecoration: 'none', color:'white'}} />
                              : null
                              }
                           </Button>
                           <Button onClick={this.handleReset} tipo="remove">Cancelar</Button>
                        </div>
                     </FormColumn>
                  :null
                  }
               </Header>
            </Content>
         </Container>
      )
   }
}