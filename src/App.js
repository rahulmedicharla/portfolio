import './App.css';
import { content } from './contents';
import {Container, Row, Col} from 'react-bootstrap';
import Navigation from './components/Nav/Navigation';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import ScrollDown from './components/ScrollDown/ScrollDown';

function App() {
  return (
    <Container fluid>
      <Row className='justify-content-end' id={content.anchorTags[0]}>
        <Col xs={2} md ={2} className='d-flex justify-content-center'>
          <Header/>
        </Col>
      </Row>
      <Row>
        <Col xs={10} md={8} lg={6} className='d-flex align-items-center justify-content-center'>
          <Landing name={content.name} description={content.description} role={content.role} aboutTag = {content.anchorTags[1]}/>
        </Col>
        <Col xs={2} md={4} lg={4}></Col>
        <Col xs={0} md={0} lg={2}className='d-flex justify-content-center'>
          <Navigation anchorTags = {content.anchorTags} links = {content.links}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12} className='d-flex justify-content-center'>
          <ScrollDown/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
