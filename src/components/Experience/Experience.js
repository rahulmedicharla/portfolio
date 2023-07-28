import {  useState, useRef } from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Experience.css';

export default function Experience({tag, exp}){
    const [active, setActive] = useState(0);
    const ref = useRef(null);

    return(
        <>
            <Row id={tag} className='mt-5'>
                <Col xs={1} md={1} lg={1}></Col>
                <Col xs={10} md={10} lg={9} className='d-flex align-items-center justify-content-flex-start'>
                    <span className='text sectionTitle mr-5'>/{tag}</span>
                    <span className='hl'></span>
                </Col> 
            </Row>
            <TransitionGroup enter>
                <CSSTransition key={active} timeout={0} classNames="activeExpAnimation" nodeRef={ref}>
                    <div ref={ref}>
                        <Row className="activeExp">
                            <Col xs={12} md={3} lg={2} className="d-flex align-items-center justify-content-center">
                                <a href={exp[active].website} target="_blank" rel="noreferrer"><Image src={exp[active].img} className="expImage" width={275} fluid/></a>
                            </Col>
                            <Col xs={12} md={7} lg={6} className="d-flex align-items-center justify-content-center">
                                <div className="expDes text">
                                    <span className='expTitle text'>{exp[active].role} @ {exp[active].company}</span><br/>
                                    <span className='expDate text'>{exp[active].date}</span><br/>
                                    {exp[active].description}<br/>
                                    <span className='expStack text'><i>Stack: {exp[active].stack}</i></span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </CSSTransition>
            </TransitionGroup>
            <Row className='d-flex justify-content-center cards'>
                {exp.map((item, index) => {
                    return (
                        <Col xs={12} md={3} lg={3} key={index} className="d-flex align-items-center justify-content-center">
                            <div className='cardC d-flex align-items-center' onClick={() => setActive(index)}>
                                <Image src={item.img} className='cardImg' width={160} fluid />
                                <div className='cardContent d-flex flex-column align-items-center'>
                                    <span className='cardTitle text'>{item.role}</span>
                                    <span className='cardTitle text'>{item.company}</span>
                                    <span className='cardSub text'>{item.date}</span>
                                    <span className='cardStack text'><i>{item.stack}</i></span>
                                </div>                                    
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}