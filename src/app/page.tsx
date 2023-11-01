"use client"
import { Breadcrumb } from 'react-bootstrap';

// referencia de pagina de login 
//[ ] https://community.devexpress.com/blogs/javascript/20201112-react-authentication-ui/react-authentication-ui-screenshot2.png

export default function Home() {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </>
  )
}
