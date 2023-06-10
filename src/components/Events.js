import React from 'react';
import '../App.scss';
import { Carousel1 } from './Carousel1.js';
import { Carousel2 } from './Carousel2.js';
import { Carousel3 } from './Carousel3.js';
import { Container, Row, Col } from 'react-bootstrap';

export const Events = () => {
    const data = [
        {
            title: 'Diverse Events',
            content: "From markets and themed gatherings to auctions and more, we host a variety of events that bring the sustainable fashion community together. These events are carefully curated to infuse fun and creativity into the sustainable fashion journey, providing you with unique experiences that go beyond traditional shopping. \n Immerse yourself in an environment where sustainability and style converge, and discover new treasures while enjoying the vibrant atmosphere.",
            image: <Carousel1 />,
        },
        {
            title: 'Real-Life Interaction',
            content: "We believe that meeting like-minded people in person is a powerful way to forge genuine connections. Our offline events provide opportunities for you to connect face-to-face with individuals who share your passion for sustainable fashion.",
            image: <Carousel2 />,
        },
        {
            title: 'Supporting Local Businesses and Communities',
            content: "At Lychuu, we understand the importance of supporting local businesses and communities.  We actively collaborate with local businesses to promote and boost their presence in the sustainable fashion landscape.\n Through our offline events, we showcase and feature select local businesses, providing them with a platform to reach a wider audience and thrive.\n By supporting local businesses, we contribute to the growth and sustainability of our communities, creating a positive impact that extends beyond fashion.",
            image: <Carousel3 />,
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
                            {/* <img src={block.image} alt={block.title} /> */}
                            {block.image}
                        </Col>
                    </Row>
                ))}
            </Container>
        </section>
    );
};