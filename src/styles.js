//styled components permite mudar o css dentro do js

import styled from 'styled-components'

//export manda para outro lugar a const
export const Container = styled.div`
width:100%;
height:100vh;
background-color:#cacaca;

display:flex;
align-items: center;
justify-content:center;

`

export const Content = styled.div`
background-color:#fff;
width:50%;

`

export const Row = styled.div`
display:flex;
flex-direction:Row;
justify-content:space-between;
align-items:center;`

export const Column = styled.div`
display:flex;
flex-direction:Column;
justify-content:space-between;
align-items:center;

`