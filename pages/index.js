import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
//import FormControl from 'react-bootstrap/FormControl'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Recanto do Amor Misericordiosa</title>
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
        <h1 className={styles.title}>
          Bem-Vindo a Pagina do Recanto do Amor Misericordioso
        </h1>
        
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
