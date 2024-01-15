// ele esta importando export const ButtonContainer 

//por ser uma const se usa {}

import {ButtonContainer} from './style'

const Button = ({label, onClick}) =>  {
    return (

      //o buttonContainer alem de aplicar um estilo ele adiciona um botão 
      
      <ButtonContainer onClick={onClick} type='button'>
       {label}
      </ButtonContainer>
    );
  }
  
  export default Button;