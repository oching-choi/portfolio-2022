import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const FooterDiv=styled.div`
  padding: 50px calc(50vw - 430px);
  font-size: 20px;
  .githubVelog{
    display: block;
    a{
      display: inline-block;
      vertical-align: top;
      width:40px;
      height:30px;
      border-radius: 15px;
      margin-right: 20px;
      background-color:#f1fc56;
      position: relative;
    }
    a:first-of-type::after{
      display: block;
      content: 'G';
      position:absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-56%);
      color:#000;
      font-size: 15px;
      font-weight: 900;
    }
    a:last-of-type::after{
      display: block;
      content: 'V';
      position:absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-56%);
      color:#000;
      font-size: 15px;
      font-weight: 900;
    }
  }
  .bottomWrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin-top: 20px;
    a{text-decoration:none; margin-right:20px;}
  }
 
`
export default function Footer(){
 
    return(
        <FooterDiv>
          <nav className="githubVelog">
            <a href="https://github.com/oching-choi" target="_blank"></a>
            <a href="https://velog.io/@oching" target="_blank"></a>
          </nav>
          <div className="bottomWrapper">
            <nav className="contact">
              <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=oching.choi@gmail.com " target="_blank">oching.choi@gmail.com</a>
              <span>+81-10-5520-4208</span>
            </nav>
            <p>Copyright &copy; oching.choi</p>
          </div>
          
        </FooterDiv>
    )
}