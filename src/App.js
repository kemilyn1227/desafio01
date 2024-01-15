//parte de cima da caulculadora 
import Input from './components/Input'

//parte dos números 
import Button from './components/Button'

//nome das const de estilos
import {Container, Content, Row} from './styles';

import { useState } from 'react';

const App = () =>  {

//current number = número atual 
//current number = 0 
const [currentNumber, setCurrentNumber] = useState('0');

const [firstNumber, setFirstNumber] = useState('0')

const [operation, setOperation] = useState('')

const handleClear = ()=>{
setCurrentNumber('0')
setFirstNumber('0')
setOperation('')
}

//lidar com a adição de um número
const handleAddNumber = (num) =>{
  //prev é o número anterior 
  setCurrentNumber(prev =>`${prev === '0' ? '' : prev}${num}`)

}


const handleSumNumbers = () =>{
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('+')
  }else{
    const sum = Number(firstNumber) + Number(currentNumber)
    setCurrentNumber(String(sum))
    setOperation('')
  }
}

const handleMinesNumbers = () =>{
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('-')
  }else{
    const sum = Number(firstNumber) - Number(currentNumber)
    setCurrentNumber(String(sum))
    setOperation('')
  }
}

const handleDivsaoNumbers = () =>{
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('/')
  }else{
    const sum = Number(firstNumber) / Number(currentNumber)
    setCurrentNumber(String(sum))
    setOperation('')
  }
}

const handleMultiplicacaoNumbers = () =>{
  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('*')
  }else{
    const sum = Number(firstNumber) * Number(currentNumber)
    setCurrentNumber(String(sum))
    setOperation('')
  }
}

const handleEquals= () =>{
  if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){

    switch(operation){
      case '+':
         handleSumNumbers()
         setFirstNumber('0')
         setOperation('')
         break

      case '-': 
         handleMinesNumbers()
         break
        
      case '/': 
         handleDivsaoNumbers()
         break

      case '*': 
         handleMultiplicacaoNumbers()
         break
         default:break 
    }
  }
}
return (
  <Container>
    <Content>
    <Input value={currentNumber}/>

      <Row>

      <Button label="1"onClick={()=>handleAddNumber('1')}/>
      <Button label="2"onClick={()=>handleAddNumber('2')}/>
      <Button label="3"onClick={()=>handleAddNumber('3')}/>
      <Button label="=" onClick={handleEquals}/>

      </Row>

      <Row>
      <Button label="4"onClick={()=>handleAddNumber('4')}/>
      <Button label="5"onClick={()=>handleAddNumber('5')}/>
      <Button label="6"onClick={()=>handleAddNumber('6')}/>
      <Button label="+"onClick={handleSumNumbers}/>

      </Row>

      <Row>
      <Button label="7"onClick={()=>handleAddNumber('7')}/>
      <Button label="8"onClick={()=>handleAddNumber('8')}/>
      <Button label="9"onClick={()=>handleAddNumber('9')}/>
      <Button label="-"onClick={handleMinesNumbers}/>

      </Row>

      <Row>
      <Button label="x"onClick={handleMultiplicacaoNumbers}/>
      <Button label="0"onClick={()=>handleAddNumber('0')}/>
      <Button label="/"onClick={handleDivsaoNumbers}/>
      <Button label="C"onClick={handleClear}/>

      </Row>

    </Content>
  </Container>
)
}

export default App;
