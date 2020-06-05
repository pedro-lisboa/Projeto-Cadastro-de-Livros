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
  max-width: 600px;
  margin: 20px;
  padding: 50px;
  background: #faeabe;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

export const Header = styled.div`
  //border: 1px red solid;
  width: 100%;
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
  max-width: 350px;
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

export const InputFile = styled.input`

/* Aparência que terá o seletor de arquivo */
  width: 100%;
  max-width: 350px;
  background-color: white;
  padding: 10px 25px 10px 25px;
  border: 1px solid #857037;
  border-radius: 8px;
  color: #333;
  cursor: pointer;

  /* Dispositivos com mais de 767 de largura */
  /* teram uma margem de 1em */
  @media screen and (min-width: 767px) {
    margin: 1em;
  }
`;

export const Button = styled.button`
  /* Transforma o texto em maiusculo */ 
  text-transform: uppercase;
  padding: 12px;
  margin: 20px 20px 20px 0px;;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  color: #fff;
  /* se o bottao possuir a propriedade add ele recebe uma cor, senão recebe outra*/
  background: ${props => (props.tipo === "add" ? "#47cf73" : "#F05D5E")};
`;