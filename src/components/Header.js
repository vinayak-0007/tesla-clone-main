import React,{useState} from 'react';
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCar } from "../features/car/carSlice";
import { useSelector } from "react-redux";
function Header () {
  const [ burgerStatus, setburgerStatus ] = useState( false );
  const cars = useSelector( selectCar );
  // console.log( cars );
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars && cars.map((car , index)  =>
          <a key={index} href="#" >{car}</a>
        )}
        {/* <a href="#" >Model S</a>
        <a href="#" >Model 3</a>
        <a href="#" >Model X</a>
        <a href="#" >Model Y</a> */}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#"> Tesla Account</a>
        <MenuIcon onClick={()=>setburgerStatus(true) }/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => {
            setburgerStatus( false );
          }}/>
        </CloseWrapper>
        {cars && cars.map((car , index)  =>
          <li><a key={ index} href="#">{car }</a></li>
        )}
        <li><a href="#">Existing inventory</a></li>
        <li><a href="#">Used inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        
      </BurgerNav>
    </Container>
  )
}

export default Header;

const Container = styled.div`
z-index:1;
top:0;
right:0;
left:0;
min-height:60px;
position:fixed;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 20px;
`
const Menu = styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;
a{
  color:black;
  font-weight:600px;
  text-transform:uppercase;
  padding:0 10px
}
@media(max-width:768px){
display:none;
}

`
const RightMenu = styled.div`
display:flex;
align-items:center;
cursor:pointer;
a{
  color:black;
  font-weight:600px;
  text-transform:uppercase;
  padding:0 10px
}
`
const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:200px;
z-index:16;
list-style:none;
padding:15px;
display:flex;
flex-direction:column;
text-align:start;
transform:${props => props.show ? "translateX(0)" : "translateX(100%)"};
transition: transform 0.35s ease-in;
li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,.3);
  a{
    font-weight:600;
  }
}

`
const CustomClose = styled( CloseIcon )`
cursor:pointer;
`

const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;

`