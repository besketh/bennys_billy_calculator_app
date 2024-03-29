import styled from "styled-components";

const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593",
    },
    pink: {
      default: "#e91e63",
      hover: "#ad1457",
    },
  };

  const MyButton = styled.button`
  background-color: #3f51b5;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  border: 0; 
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #283593;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const MyJazzyButton = (props)=>{      
    return(      
        <MyButton onClick={props.handleClick}>{props.text}</MyButton>        
    )
}
export default MyJazzyButton