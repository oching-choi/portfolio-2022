import styled from "styled-components";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutmeDiv=styled.div`
    padding: 40px calc(50vw - 430px);
    .introduce{
      font-size: 45px;
      font-weight: 800;
      line-height: 1;
      margin-bottom: 120px;
     .name{
        margin-top: 30px;
      }
    }
`
const CardUl=styled.ul`
  display: flex;
  .list{
    min-width: 200px;
    /* text-transform: uppercase; */
    text-transform: capitalize;
    h3{
      font-size: 18px;
      font-weight: 800;
      margin-bottom: 20px;
    }
    p{
      line-height: 1.4;
    }
  }
`

export default function Aboutme(){

  return(
    <>
        <Header/>
        <AboutmeDiv>
          <h2 className="introduce">
            UIUX<br/>
            FRONTEND DEVELOPER<br/>
            <p className="name">CHOI DA HYEON</p>
          </h2>
         <CardUl>
          <li className="list">
            <h3>STACK</h3>
            <p>html</p>
            <p>css</p>
            <p>javascript</p>
            <p>typescript</p>
            <p>react</p>
          </li>
          <li className="list">
            <h3>TOOL</h3>
            <p>GIt, Github</p>
            <p>Figma, Zeplin</p>
            <p>Slack</p>
            <p>VS Code</p>
          </li>
          <li className="list">
            <h3>GOAL</h3>
            <p>
              기술 개발 뿐 아니라 <br/>
              기획과 디자인을 함께 공부해나가며<br/>
              프론트앤드 전반의 개발이 가능한 개발자로 거듭나고싶습니다. 
            </p>
          </li>
         </CardUl>
        </AboutmeDiv>
        <Footer/>
    </>
      
  )
}