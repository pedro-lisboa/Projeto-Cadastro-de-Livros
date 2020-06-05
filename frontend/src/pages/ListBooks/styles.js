import styled from 'styled-components';

export const Container = styled.div`
  //border: 1px blue solid;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  //border: 1px red solid;
  width: 100%;
  max-width: 1000px;
  margin: 20px;
  padding: 50px;
  background: #faeabe;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

export const Header = styled.div`
  //border: 1px red solid;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Logos = styled.div`
  //border: 1px blue solid;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonHeader = styled.button`
  /* Transforma o texto em maiusculo */
  text-transform: uppercase;
  padding: 12px;
  margin: 20px 20px 20px 0px;;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  color: #fff;
  background: ${props => (props.tipo === "cadastrar" ? "#47cf73" : "#345bcb")};
`;

export const FormColumn = styled.form`
  //border: 1px blue solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const InputColumn = styled.input`
  width: 100%;
  max-width: 320px;
  height: 50px;
  color: #333;
  border: 1px solid #857037;
  border-radius: 8px;
  padding: 0 24px;

  /* Dispositivos com mais de 767 de largura */
  /* teram uma margem de 1em */
  @media screen and (min-width: 767px) {
    margin: 1em;
  }
`;

export const Button = styled.button`
  /* Transforma o texto em maiusculo */ 
  padding: 10px;
  margin: 0 0 30px 10px;;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  color: #fff;
  /* se o bottao possuir a proprieda add ele recebe uma cor, senão recebe outra*/
  background: ${props => (props.tipo === "add" ? "#47cf73" : "#F05D5E")};

  /* o mesmo que o anterior, mas para botões cujo mouse está em cima */
  &:hover {
    background: ${props => (props.tipo === "add" ? "#248c46" : "#d31415")};
  }
`;

export const ButtonTable = styled.button`
  text-transform: uppercase;
  font-weight: 700;
  padding: 0.5em;
  margin-right: 1em;
  border: none;
  border-radius: 8px;
  color: #fff;
  background: ${props => (props.tipo === "del" ? "#F05D5E" : "#47cf73")};

  &:hover {
    background: ${props => (props.tipo === "del" ? "#d31415" : "#248c46")};
  }
`;

export const Table = styled.table`
  //border: 1px blue solid;
  width: 100%; 
  /* Faz o componente ocupar 100% da largura da tela*/

  /* Navega entre os filhos do table até o tr */
  & > thead > tr {
    font-size: 1.2em; 
    /*Determina o tamanho da fonte */ 
    /* como 1.5 vezes o tamanho atual */
  }

  /* navega até o th do cabeçalho para alinhar */
  /* a esquerda e adicionar uma espaço ao redor */
  & > thead > tr > th {
    
    /* Coloca o texto do cabeçalho alinhado a esquerda*/
    text-align: center; 
    
    /* Top/Bottom Left/Right || Top Left Bottom Right */
    padding: 5px 10px; 
  }

  /* Navega até o tr do tbody e usa o hover para colorir */ 
  /* a linha em que o mouse está */
  & > tbody > tr:hover {
    /* Adiciona um delay para que as alterações */ 
    /* abaixo aconteçam */
    transition: 1s; 
    
    background: #c6c7c4;
  }

  /* navega até o td do corpo para alinhar a esquerda */
  /* e adicionar uma espaço ao redor */
  & > tbody > tr td {
    text-align: left;
    padding: 5px 10px;
    
    border-bottom: 1px solid #aaa; 
    /* Adiciona uma borda inferior de 1pixel de espessura*/
  }

  /* Somente telas com no maximo 767px de largura */
  /* irão visualizar o codigo abaixo */
  @media (max-width: 767px) {
    & {
      display: block;
      position: relative;
      width: 100%;
    }

    & thead,
    & tbody,
    & th,
    & td,
    & tr {
      display: block;
    }

    & td,
    & th {
      height: 35px;
    }

    & thead {
      float: left; /* Alinha o titulo a esquerda*/
    }

    & thead tr {
      font-size: 1em;
    }

    & tbody {
      width: auto;
      position: relative;
      overflow-x: auto; 
      
      /* tudo que ultrapassar os limites do componente na 
      horizontal recebera uma barra de rolagem*/
      -webkit-overflow-scrolling: touch; 
      
      /* informa que a barra de rolagem sera 
      touch screen em dispositivos que possuem*/
      white-space: nowrap; /* não deixa o texto quebrar de linha*/
    }

    & tbody tr {
      display: inline-block;
    }
  }
`;

export const Actions = styled.div`
  //border: 1px solid green;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    border: 0;
    background: #da552f;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    margin-right: 10px;
    cursor: pointer;

    /* &:hover {
      opacity: 0.7;
    } */

    &[disabled] {
      opacity: 0.5;
      cursor: default;
    }
  }`