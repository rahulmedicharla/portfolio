import './App.css';
import { content } from './contents';
import {Container, Row, Col} from 'react-bootstrap';
import Navigation from './components/Nav/Navigation';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <Container fluid>
      <Row className='justify-content-end' id={content.anchorTags[0]}>
        <Col xs={2} md ={2} className='d-flex justify-content-center'>
          <Header/>
        </Col>
      </Row>
      <Row>
        <Col xs={10} md={10} className='d-flex'>
          <Landing name={content.name} description={content.description} role={content.role} aboutTag = {content.anchorTags[1]}/>
        </Col>
        <Col xs={2} md={2} className='d-flex justify-content-center'>
          <Navigation anchorTags = {content.anchorTags} links = {content.links}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
