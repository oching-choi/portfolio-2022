import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const HeaderDiv=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px calc(50vw - 430px);
  font-size: 20px;
  font-weight: 800;
  .logo{
    width:90px;
    height:60px;
    background-color: #f1fc56;
    border-radius: 50px;
  }
  .menu button{
    display: inline-block;
    background-color: transparent;
    vertical-align: middle;
    text-decoration: none;
    position: relative;
    padding:4px 13px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1px;
    border: none;
    cursor: pointer;
    &:first-of-type{
      margin-right: 70px;
    }
    &::after{
      display: block;
      content: "";
      position: absolute;
      top:-4px;
      left:50%;
      transform: translateX(-50%);
      border-radius: 10px;
      width:6px;
      height:5px;
      background:#f1fc56;
      transition: all .3s;
      opacity: 0;
      z-index: -1;
    }
    &:hover::after{
      opacity: 1;
    }
    &.active::after{
     
      opacity: 1;
    }
  }

`
export default function Header(){
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('')
 
    return(
        <HeaderDiv>
            <h1 className="logo"></h1>
            <div className="menu">
                <button className={isActive=='aboutme'?'active':''} onClick={()=>{
                  setIsActive('aboutme')
                  navigate('/')
                  console.log(isActive)
                }}>ABOUT ME</button>
                  <button className={isActive=='projects'?'active':''}  onClick={()=>{
                  setIsActive('projects')
                  navigate('/projects')
                  console.log(isActive)
                }}>PROJECT</button>
            </div>
        </HeaderDiv>
    )
}