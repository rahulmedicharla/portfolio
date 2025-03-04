import './Explorations.css'
import {Row, Col} from 'react-bootstrap';

export default function Explorations({tag, explorations}) {
    return (
        <>
            <Row id={tag} className='mt-5'>
                <Col xs = {1} md={1} lg={2} xl={2}></Col>
                <Col xs={10} md={10} lg={8} xl={8} className='d-flex align-items-center justify-content-flex-start'>
                    <span className='text sectionTitle'>/{tag}</span>
                    <span className='hl'></span>
                </Col>
                <Col xs = {1} md={1} lg={2} xl={2}></Col>  
            </Row>
            <Row>
                <Col xs={1} md={1} lg={2}></Col>
                <Col xs={10} md={10} lg={8} className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='text-center explorationsC'>
                        <span className='text contentTitle'>{explorations.title}</span>
                        {explorations.content.map((item, index) => {
                            return (
                                <div key={index}>
                                    <span className='text contentSubtitle'>{item.section}</span>
                                    {item.content.map((subitem, subindex) => {
                                        return (
                                            <a href={subitem.link} key={subindex} target='_blank' rel='noreferrer' className='articleLink'>< div className='articleContainer'>
                                                <span className='text linkTitle'>{subitem.title}</span>
                                                <span className='text linkDescription'>{subitem.description}</span>
                                            </div></a>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </>
    )
}