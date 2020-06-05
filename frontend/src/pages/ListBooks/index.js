import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import {
   Container,
   Content,
   Header,
   Logos,
   ButtonHeader,
   ButtonTable,
   Table,
   Actions
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
      livroInfo: {},
      page: 1,
      showList: true
   } 

   async componentDidMount(page = 1) {
      const response = await api.get(`/listalivro?page=${page}`)
      console.log(response.data)
      const { docs, ...livroInfo } = response.data
      this.setState({ list: docs, livroInfo, page })
      //Com Axios, as informações dos registros ficam dentro do data
      this.setState({
         autor: '',
         nome: '',
         pagina: '',
         editora: '',
         isbn: '',
         image: ''
      })
   }

   nextPage = () => {
      const { page, livroInfo } = this.state
      if (page === livroInfo.pages) return;
      const pageNumber = page + 1
      this.componentDidMount(pageNumber)
   }
   
   prevPage = () => {
      const { page } = this.state
      if (page === 1) return;
      const pageNumber = page - 1
      this.componentDidMount(pageNumber)
   }

   handleDelete = async id => {
      const { page } = this.state
      if (window.confirm('Tem certeza (S/N)?')) {
         await api.delete(`/listalivro/${id}`)
         this.componentDidMount(page)
      }
   }

   hideShowList = () => {
      const { showList } = this.state
      this.setState({
         showList: !showList
      })
   }

   render() {

      const { list, page, livroInfo, showList } = this.state

      return (
         <Container>
            <Content>
               <Header>
                  <Logos>
                     <img src={logoImg} style= {{width: '170px'}} alt="Projeto Livros"/>
                     <img src={logoText} style= {{width: '250px'}} alt="Projeto Livros"/>
                  </Logos>
                  <div>
                     <ButtonHeader tipo= 'cadastrar'>
                        <Link to="/" style={{textDecoration: 'none', color:'white'}}>
                           Voltar
                        </Link>
                     </ButtonHeader>
                     <ButtonHeader onClick={() => this.hideShowList()}>Listar</ButtonHeader>
                  </div>
               </Header>
               {showList ?
               <>
                  {list[0] !== undefined ?
                     <Table>
                           <thead>
                              <tr>
                              <th>Imagem</th>
                              <th>Autor</th>
                              <th>Nome</th>
                              <th>Páginas</th>
                              <th>Editora</th>
                              <th>ISBN</th>
                              <th>Ações</th>
                              </tr>
                           </thead>
                        
                        <tbody>
                           {list.map (liv => (
                              <tr key={liv._id}>
                                 <td style={{textAlign:'center'}}>
                                 <img width='90' 
                                    src={`http://localhost:3333/files/${liv.image}`} alt=''/>
                                 </td>
                                 <td style={{textAlign:'center'}}>{liv.autor}</td>
                                 <td style={{textAlign:'center'}}>{liv.nome}</td>
                                 <td style={{textAlign:'center'}}>{liv.pagina}</td>
                                 <td style={{textAlign:'center'}}>{liv.editora}</td>
                                 <td style={{textAlign:'center'}}>{liv.isbn}</td>
                                 <td style={{textAlign:'center'}}>
                                       <ButtonTable onClick={() => this.handleDelete(liv._id)} tipo="del">Excluir</ButtonTable>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </Table>
                  : null}
                  {list[0] !== undefined ?
                     <Actions>
                        <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                        <button disabled={page === livroInfo.pages} onClick={this.nextPage}>Próximo</button>
                     </Actions>
                  : null
                  }
               </>
               : null
               }
            </Content>
         </Container>
      )
   }
}