import React from 'react';
import { Container,Col,Row } from 'react-bootstrap' ;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img21 from "../images/fence1.png";
import img22 from "../images/fence2.png";
import img23 from "../images/fence3.png";
import img24 from "../images/fence4.png";
import img25 from "../images/fence5.png";
import img26 from "../images/fence1.png";
import Header from "./Header";


const responsive = {
  superLargeDesktop: {

    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  laptop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1
  },
  tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1
    },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};




const product = [
{
product_name:"Real Inspiration – How celebrities deal with ASD",
images:img21 ,
price:"What do Albert Einstein, Bob Dylan, Sir Issac Newton, Henry Cavendish and Daryl Hannah have in common? Apart from being famous personalities, they are all individuals who dealt with autism spectrum disorder. But they did not allow living on the spectrum to affect their capabilities. Rather, they went ahead to excel in their individual fields and professions.",
id:1,
path:"blog1"
},
{
  product_name:"When a kid is on the spectrum – or just off it",
  images:img22,
  price:"Autism spectrum disorder cases are steadily on the rise globally, as most medical professionals will testify. Most advanced nations have already developed the medical intelligence and infrastructure to deal with this clinical condition. In India, unfortunately, awareness about it remains abysmally low till today. In India, unfortunately, awareness about it remains abysmally low till today",
  old_price:"₹499",
  id:2,
path:"blog2"

  },
{
  product_name:"Is your little one at risk from ASD? Check with these common signposts",
  images:img23,
  price:"Is your little one at risk from ASD? Check with these common signposts Updated on : 11th Sept, 2021 By Gurjeet Walia Everyone desires a happy and healthy child, so it follows that all parents and guardians keep a lookout for health issues that might impair the normal growth and development of their little one. […]",
  id:3
  },
  {
    product_name:"Let’s bust some myths about Autism By Gurjeet Walia",
    images:img24,
    price:"Let’s bust some myths about Autism By Gurjeet Walia You have probably heard of Autism Syndrome Disorder (also referred to as ASD) or simply Autism. Possibly you may know a fair bit about it, dealing with a loved one in your circle who is autistic. But as a laypersonare youaware ofthe latest findingson the subject […]  In India, unfortunately, awareness about it remains abysmally low till today",
    id:4,
    
    },
    {
      product_name:"ABOUT PATIENCE AND POSITIVITY : PARENTING CHILDREN WITH ASD",
      images:img25,
      price:"ABOUT PATIENCE AND POSITIVITY : PARENTING CHILDREN WITH ASD By Gurjeet Walia As in the case of typically developing children, there is a strong parental influence on autistic children as well. Since ASD itself is a field of ongoing research, there is a scarcity of material available on parenting styles and behaviour with respect to […]",
      id:5
      },
      {
        product_name:"PICKY LITTLE EATERS WITH ASD: DEALING WITH THEM",
        images:img26,
        price:"PICKY LITTLE EATERS WITH ASD: DEALING WITH THEM By Gurjeet Walia Ahana mother’s is at her wits’ end. Little Ahana refuses to try new additions to her range of foodstuff. What is more, any negotiations or force-feeding ends up in tantrums or meltdowns. The 5-year-old is on the spectrum, and her parents are worried that […]  In India, unfortunately, awareness about it remains abysmally low till today  In India, unfortunately, awareness about it remains abysmally low till today",
        id:6
        },  
            
]


function Homeblog() {
 
  return (
    <Container fluid style={{paddingLeft:'0px',paddingRight:'0px'}}>
    <Header/>
      
         <Row style={{marginTop:'5rem'}}>
         {product.map((pro) => ( 
          
     <Col lg={6}>
     <Card style={{ width: '98%',marginTop:'30px' }}>
       <Card.Img  src={pro.images} id={1} variant="top"/> 
       <Card.Body>
         <Card.Title style={{textAlign:'justify'}}> {pro.product_name}</Card.Title>
         <Card.Text>
         {pro.price}
         </Card.Text>
         <Button  variant="primary"><a target="_self" href={pro.path}>Learn More</a></Button>
       </Card.Body>
     </Card>
     </Col>
         ))}
 </Row>
      
     </Container>

  )
}

export default Homeblog;