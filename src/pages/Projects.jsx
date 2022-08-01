import styled from "styled-components";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Header from "../components/Header";

const ProjectsDiv=styled.div`
    padding: 0 calc(50vw - 430px);
    .subject{
      
    }
`

export default function Projects(){

  return(
    <>
        <Header/>
        <ProjectsDiv>
          <div className="subject">
            <h2 className="title">8</h2>
          </div>
            
            
        </ProjectsDiv>
    </>
      
  )
}