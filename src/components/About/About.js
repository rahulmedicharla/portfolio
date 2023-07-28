import {Row, Col, Image} from "react-bootstrap";
import "./About.css";
import { GitHub, Email, LinkedIn, Twitter } from "@mui/icons-material";

export default function About({links, about, tag, leadership, skills}){
    return(
        <>
            <Row id={tag} className='mt-5'>
                <Col xs = {1} md={1} lg={1}></Col>
                <Col xs={10} md={10} lg={9} className='d-flex align-items-center justify-content-flex-start'>
                    <span className='text sectionTitle mr-5'>/{tag}</span>
                    <span className='hl'></span>
                </Col> 
            </Row>
            <Row>
                <Col xs={11} md={11} lg={10} className="d-flex align-items-center flex-row-reverse">
                    <a href={links.twitter} className="linkColor bigLinkC"><Twitter className="bigLinks" fontSize="large"/></a>
                    <a href={links.linkedin} className="linkColor bigLinkC"><LinkedIn className="bigLinks" fontSize="large"/></a>
                    <a href={links.github} className="linkColor bigLinkC"><GitHub className="bigLinks" fontSize="large"/></a>
                    <a href={links.email} className="linkColor bigLinkC"><Email className="bigLinks" fontSize="large"/></a>
                    <a href="/resume.pdf" target="_blank" rel="noreferrer"><div className="button">
                        resume
                    </div></a>
                </Col>
            </Row>
            <Row className="mt-5 align-items-center justify-content-center">
                <Col xs={12} md={3} lg={2} className=" d-flex justify-content-center mb-3">
                    <Image className="headshot" src="/headshot.jpg" width={250} fluid/>
                </Col>
                <Col xs={12} md={8} lg={6} className="d-flex mt-3">
                    <p className="text about">{about}<br/><b>{leadership}</b></p>
                </Col>
            </Row>
            <Row className="d-flex align-items-center justify-content-center" >
                <Col xs={12} md={12} lg={10} className="d-flex align-items-center justify-content-center">
                    {skills.map((skill, index) => {
                        return(
                            <div key={index} className="d-flex flex-row align-items-center justify-content-center skillsC">
                                <svg xmlns="http://www.w3.org/2000/svg" className="skillsIcon" viewBox="0 0 28 33" fill="none">
                                    <path d="M25.1506 11.4532C28.824 13.815 28.8241 19.185 25.1506 21.5468L9.24491 31.7735C5.25186 34.3409 0 31.4739 0 26.7267L0 6.27329C0 1.5261 5.25186 -1.3409 9.24491 1.22647L25.1506 11.4532Z" fill="#B3C3FF"/>
                                </svg>
                                <span className="text skills skillsText" key={index}>{skill}</span>
                            </div>
                        )
                    })}
                </Col>
            </Row>
        </>
    )
}