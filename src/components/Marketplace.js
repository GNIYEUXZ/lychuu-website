import React from 'react';
import '../App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import lowfi1 from "../assets/img/lowfi1.PNG"
import lowfi2 from "../assets/img/lowfi2.PNG"
import lowfi3 from "../assets/img/lowfi3.PNG"

export const Marketplace = () => {
    const data = [
        {
            title: 'Sustainability Meets Personal Expression',
            content: "Empowering you to discover an ever-evolving marketplace that resonates with your distinct aesthetic and values. \n Whether you're seeking to refresh your wardrobe, uncover hidden gems, or simply connect with others who share your passion, Lychuu is your go-to destination.",
            image: lowfi1,
        },
        {
            title: 'Friendships Blossom and Lasting Connections',
            content: "Connect with like-minded people who share your passion for sustainable fashion, and discover a supportive network that extends beyond the transactional. Seek fashion advice, recommend items to friends, and encourage and help each other in embracing a sustainable lifestyle. \n Our platform facilitates meaningful interactions, allowing you to build relationships that go beyond the exchange of fashion items.",
            image: lowfi2,
        },
        {
            title: 'Embrace the Fun Side of Sustainable Lifestyle',
            content: "At Lychuu, we're here to prove that embracing a sustainable lifestyle can be easy and fun.\n We've introduced gamification elements to our platform, rewarding you for every transaction you make. Enjoy the thrill of unlocking rewards, earning badges, and leveling up as you make conscious fashion choices.\n Additionally, we visualize your environmental impact, allowing you to see the positive change you're making with each sustainable decision.",
            image: lowfi3,
        },
    ];

    return (
         <section>
        <Container className='intro'>
            {data.map((block, index) => (
                <Row className="block" key={index}>
                    <Col sm={12} md={6} className="block-content">
                        <h2>{block.title}</h2>
                        <p>{block.content}</p>
                    </Col>
                    <Col sm={12} md={6} className="block-image">
                        <img src={block.image} alt={block.title} className="img-lowfi" />
                    </Col>
                </Row>
            ))}
        </Container>
    </section>
    );
};
