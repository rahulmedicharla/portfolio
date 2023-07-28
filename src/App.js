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
      <Row id={content.anchorTags[0]}>
        <Col xs={12} md={12} lg={10} className='d-flex justify-content-center'>
          <Header/>
        </Col>
      </Row>
      <Row className='mainContent'>
        <Col xs={12} md={9} lg={7} className='d-flex align-items-center justify-content-center'>
          <Landing name={content.name} description={content.description} role={content.role} aboutTag = {content.anchorTags[1]}/>
        </Col>
        <Col xs={0} md={3} lg={3} className='d-flex align-items-center justify-content-center'>
          <Image src="/logo.png" className='mainLogoContainer' fluid width={600} />
        </Col>
        <Col xs={0} md={0} lg={2}className='d-flex justify-content-center'>
          <Navigation anchorTags = {content.anchorTags} links = {content.links}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={10} className='d-flex justify-content-center'>
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
