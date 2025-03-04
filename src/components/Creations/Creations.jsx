import {useRef, useState} from 'react';
import {Row, Col, Image, Container} from 'react-bootstrap';
import './Creations.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


export default function Creations({tag, creations}){
    const [swiper, setSwiper] = useState(null);

    return(
        <>
            <Row id={tag} className='mt-5'>
                <Col xs = {1} md={1} lg={2} xl={2}></Col>
                <Col xs={10} md={10} lg={8} xl={8} className='d-flex align-items-center justify-content-flex-start'>
                    <span className='text sectionTitle'>/{tag}</span>
                    <span className='hl'></span>
                </Col>
                <Col xs={1} md={1} lg={2} xl={2}></Col> 
            </Row>
            <Row className='mt-5 align-items-start'>
                <Col xs={0} xl={2} className='order-1'></Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={2} className='d-flex justify-content-center align-items-center order-3 order-xl-2 flex-wrap creationImages'>
                    {creations.map((item, index) => {
                        return (
                            <Col xs= {5} sm={4} md={4} lg={3} xl={12} key={index} className=' p-sm-1 p-md-2 p-lg-2 p-xl-0' style={{padding:"0", margin:"0"}}>
                                <Image src={item.img} className='creationImage' fluid onClick={() => {swiper.slideTo(index)}} />
                            </Col>
                        )
                    })}
                </Col>
                <Col xs={12} sm={12}md={12} lg={12} xl={6} className='d-flex align-items-center justify-content-center order-2 order-xl-3'>
                    <Col xs={12} sm={10} md={9} lg={8} xl={11}>
                        <Swiper
                            onSwiper={setSwiper}
                            pagination={{
                            dynamicBullets: true,
                        }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="swiper"
                        >
                            {creations.map((creation, index) => {
                                return(
                                    <SwiperSlide key={index} className='d-flex flex-column justify-content-center align-items-start'>
                                        <Image src={creation.data} className='mainImage'></Image>
                                        <br/>
                                        <Container className='creationLinks d-flex align-items-center justify-content-end' style={{gap: "10px"}}>
                                            <a href={creation.github} target="_blank" rel="noreferrer"><div className="button">
                                                source code
                                            </div></a>
                                            {creation.live ? (
                                                <a href={creation.live} target="_blank" rel="noreferrer"><div className="button">
                                                see live
                                            </div></a>
                                            ): null}
                                        </Container>
                                        <span className='creationTitle text'>{creation.name}</span>
                                        <span className='creationDate text'>{creation.date}</span>
                                        <span className='creationDes text'>{creation.description}</span>
                                        <span className='creationStack text'><i>Stack: {creation.stack}</i></span>
                                        <br/>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </Col>
                </Col>
            </Row>
        </>
    )
}