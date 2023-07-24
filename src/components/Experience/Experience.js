import React from 'react';
import {Row, Col} from 'react-bootstrap';

export default function Experience({tag}){
    return(
        <>
            <Row id={tag} className='mt-5'>
                <Col xs = {1} md={1} lg={1}></Col>
                <Col xs={10} md={10} lg={9} className='d-flex align-items-center justify-content-flex-start'>
                    <span className='text sectionTitle mr-5'>/{tag}</span>
                    <span className='hl'></span>
                </Col> 
            </Row>
        </>
    )
}