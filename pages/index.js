import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Recanto do Amor Misericordioso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
              <img
                src="/recanto.svg"
                width="64"
                height="64"
                className="d-inline-block align-top"
                alt="Recanto Logo"
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#history">História</Nav.Link>
              <Nav.Link href="#contact">Fale Conosco</Nav.Link>
              <Nav.Link href="#news">Notícias</Nav.Link>
              <Nav.Link href="#about">Quem Somos</Nav.Link>
              <Nav.Link href="#galery">Galeria</Nav.Link>
            </Nav>
            <Nav inline>
              <Button variant="outline-success">Doações</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col sm={8}>
              <h1 id="home">
                Recanto do Amor Misericordioso
              </h1>
              <br/>                
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Aenean enim neque, vestibulum finibus semper eu, rutrum ullamcorper odio. 
              Nulla tempus ultricies lorem a aliquam. Fusce sit amet ante nunc. 
              Aliquam id rutrum libero. Mauris vel rhoncus elit, id faucibus nunc. 
              Duis tempor tincidunt libero, ac tempus nisl varius sed. 
              Pellentesque sit amet urna non erat elementum gravida. 
              Praesent dapibus ac lacus sed auctor. 
              Phasellus pharetra, diam nec accumsan varius, augue nisi consectetur nisi, quis consequat ipsum felis quis tellus. 
              Sed iaculis id lectus sit amet imperdiet. 
              Suspendisse lectus orci, tempus vitae nisl a, varius blandit odio. 
              Donec condimentum turpis felis, vel ultrices risus tempus eget. 
              Nam fringilla sem nec dolor euismod pharetra. 
              Phasellus pharetra eleifend rutrum.
            </Col>
            <Col sm={4}><img src="/recanto.svg" width='100%' height='100%' ></img></Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={4}>
              <img src="http://arquidiocesecampinas.com/wp-content/uploads/2012/12/wwwpadre-pio-e-o-amor-a-eucaristia-300x168.jpg" width='100%' height='100%' ></img>
            </Col>
            <Col sm={8}>
            <h1 id="history">
                História
              </h1>
              <br/>                
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Aenean enim neque, vestibulum finibus semper eu, rutrum ullamcorper odio. 
              Nulla tempus ultricies lorem a aliquam. Fusce sit amet ante nunc. 
              Aliquam id rutrum libero. Mauris vel rhoncus elit, id faucibus nunc. 
              Duis tempor tincidunt libero, ac tempus nisl varius sed. 
              Pellentesque sit amet urna non erat elementum gravida. 
              Praesent dapibus ac lacus sed auctor. 
              Phasellus pharetra, diam nec accumsan varius, augue nisi consectetur nisi, quis consequat ipsum felis quis tellus. 
              Sed iaculis id lectus sit amet imperdiet. 
              Suspendisse lectus orci, tempus vitae nisl a, varius blandit odio. 
              Donec condimentum turpis felis, vel ultrices risus tempus eget. 
              Nam fringilla sem nec dolor euismod pharetra. 
              Phasellus pharetra eleifend rutrum.
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={8}>
            <h1 id="contact">
                Fale Conosco
              </h1>
              <br/>                
              <div>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Nome"
                    aria-label="Nome"
                    aria-describedby="name"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="E-mail"
                    aria-label="E-mail"
                    aria-describedby="email"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Assunto"
                    aria-label="Assunto"
                    aria-describedby="subject"
                  />
                </InputGroup>
                
                <InputGroup>
                  <FormControl 
                    as="textarea" 
                    placeholder="Digite aqui a sua mensagem"
                    aria-label="Digite aqui a sua mensagem"
                    aria-describedby="content"
                  />
                </InputGroup>

                <InputGroup>
                  <Button>Doações</Button>
                </InputGroup>

              </div>
            </Col>
            <Col sm={4}>
              <img src="http://arquidiocesecampinas.com/wp-content/uploads/2012/12/wwwpadre-pio-e-o-amor-a-eucaristia-300x168.jpg" width='100%' height='100%' ></img>
            </Col>
          </Row>
        </Container>    
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
