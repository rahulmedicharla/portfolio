import './App.css';
import { content } from './contents';
import {Container, Row, Col, Image} from 'react-bootstrap';
import Navigation from './components/Nav/Navigation';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import ScrollDown from './components/ScrollDown/ScrollDown';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Creations from './components/Creations/Creations';
import Explorations from './components/Explorations/Explorations';

function App() {
  return (
    <Container fluid>
      <Row id={content.anchorTags[0]} className='d-flex justify-content-center align-items-center mainContent'>
        <Col xs={8} sm={6} md={5} lg={5} xl={5} className='d-flex align-items-center justify-content-left order-sm-2 order-xl-3'>
          <Header/>
        </Col>
        <Col xs={0} sm ={0} md ={0} lg={0} xl={2} className='order-xl-1'></Col>
        <Col xs={12} sm={6} md={6} lg={5} xl={3} className='d-flex align-items-center justify-content-center order-sm-1 order-xl-2'>
          <Landing name={content.name} description={content.description} role={content.role} aboutTag = {content.anchorTags[1]}/>        
        </Col>
        <Col xs={0} sm={0} md={0} lg={0} xl={2} className='d-flex order-xl-3 justify-content-center'>
          <Navigation anchorTags = {content.anchorTags} links = {content.links}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12} className='d-flex justify-content-center'>
          <ScrollDown tag = {content.anchorTags[1]}/>
        </Col>
      </Row>

      {/* about section */}
      <About about = {content.about} links = {content.links} tag = {content.anchorTags[1]} leadership={content.leadership} skills={content.skills}/>

      {/* experience section */}
      <Experience tag = {content.anchorTags[2]} exp={content.experience}/>

      {/* creations section */}
      <Creations tag={content.anchorTags[3]} creations={content.creations} />

      <Explorations tag={content.anchorTags[4]} explorations={content.explorations} />

      <Row>
        <Col xs={12} md={12} lg={12} className='d-flex justify-content-center'>
          <ScrollUp tag = {content.anchorTags[0]}/>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
