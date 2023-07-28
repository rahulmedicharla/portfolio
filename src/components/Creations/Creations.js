import {useRef, useState} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Creations.css';

export default function Creations({tag, creations}){
    const [active, setActive] = useState(0);
    const ref = useRef(null);

    return(
        <>
            <Row id={tag} className='mt-5'>
                <Col xs={1} md={1} lg={1}></Col>
                <Col xs={10} md={10} lg={9} className='d-flex align-items-center justify-content-start'>
                    <span className='text sectionTitle mr-5'>/{tag}</span>
                    <span className='hl'></span>
                </Col> 
            </Row>
            <Row className='d-flex flex-row justify-content-center align-items-start creationsC'>
                <Col xs={0} md={3} lg={2} className='d-flex flex-column align-items-start justify-content-evenly creationImageC'>
                    {creations.map((item, index) => {
                        return (
                            <Image key={index} src={item.img} className='creationImage' width={190} fluid onClick={() => setActive(index)} />
                        )
                    })}
                </Col>
                <Col xs={12} md={9} lg={7} className="d-flex align-items-center justify-content-center">
                <TransitionGroup enter>
                        <CSSTransition key={active} timeout={0} className="activeCreationAnimation" nodeRef={ref}>
                            <div ref={ref}>
                                <Row className=" activeCreation d-flex flex-column">
                                    <video autoPlay muted loop className='activeCreationVideo'>
                                        <source src={creations[active].video} type="video/mp4"/>
                                    </video>
                                    <div className='creationLinks d-flex align-items-center justify-content-end'>
                                        <a href={creations[active].github} target="_blank" rel="noreferrer"><div className="button">
                                            source code
                                        </div></a>
                                        {creations[active].live ? (
                                            <a href={creations[active].live} target="_blank" rel="noreferrer"><div className="button">
                                            see live
                                        </div></a>
                                        ): null}
                                    </div>
                                    <div className="creationDes text">
                                        <span className='creationTitle text'>{creations[active].name}</span><br/>
                                        <span className='creationDate text'>{creations[active].date}</span><br/>
                                        {creations[active].description}<br/>
                                        <span className='creationStack text'><i>Stack: {creations[active].stack}</i></span>
                                    </div>
                                </Row>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                </Col>
                <Col xs={12} md={0} lg={0} className='d-flex flex-row align-items-start justify-content-evenly creationImageCPhone'>
                    {creations.map((item, index) => {
                        return (
                            <Image key={index} src={item.img} className='creationImagePhone' width={190} fluid onClick={() => setActive(index)} />
                        )
                    })}
                </Col>
            </Row>
        </>
    )
}