import {  useState, useRef } from 'react';
import {Row, Col, Image} from 'react-bootstrap';

import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';

import './Experience.css';

export default function Experience({tag, exp}){
    const [active, setActive] = useState(0);
    const ref = useRef(null);

    return(
        <>
            <Row id={tag} className='mt-5'>
                <Col xs = {1} md={1} lg={2} xl={2}></Col>
                <Col xs={10} md={10} lg={8} xl={8} className='d-flex align-items-center justify-content-flex-start'>
                    <span className='text sectionTitle'>/{tag}</span>
                    <span className='hl'></span>
                </Col>
                <Col xs = {1} md={1} lg={2} xl={2}></Col> 
            </Row>
            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <Row className="activeExp">
                        <Col xs={0} sm={0} md={1} lg={2} xl={2}></Col>
                        <Col xs={12} sm={12} md={3} lg={2} xl={2} className="d-flex align-items-center justify-content-center">
                            <a href={exp[active].website} target="_blank" rel="noreferrer"><Image src={exp[active].img} className="expImage" width={275} fluid/></a>
                        </Col>
                        <Col xs={12} sm={12} md={7} lg={6} xl={6} className="d-flex align-items-center justify-content-center">
                            <div className="expDes text">
                                <span className='expTitle text'>{exp[active].role} @ <a href={exp[active].website} target="_blank" rel="noreferrer" className='text expTitle underline'>{exp[active].company}</a></span><br/>
                                <span className='expDate text'>{exp[active].date}</span><br/>
                                {exp[active].description}<br/>
                                {exp[active].link && (
                                    <>
                                        <span className='expLink text'><a href={exp[active].link.uri} target="_blank" rel="noreferrer" className='text expLink underline'>{exp[active].link.title}</a></span><br/>
                                    </>
                                )}
                                <span className='expStack text'><i>Stack: {exp[active].stack}</i></span>
                            </div>
                        </Col>
                    </Row>
                </motion.div>
            </AnimatePresence>  
            <Row className='d-flex justify-content-center cards'>
                {exp.map((item, index) => {
                    return (
                        <Col xs={12} sm={6} md={6} lg={2} xl={2} key={index} className="d-flex align-items-center justify-content-center">
                            <div className='cardC d-flex align-items-center' onClick={() => setActive(index)}>
                                <Image src={item.img} className='cardImg' width={"55%"} fluid />
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