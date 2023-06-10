import { Col, Row } from "react-bootstrap";
import icon1 from "../assets/img/icon-1.png"
import icon2 from "../assets/img/icon-2.png"
import icon3 from "../assets/img/icon-3.png"

export const Banner = () => {
    const icons = [
        { src: icon1, caption: 'Reuse' },
        { src: icon2, caption: 'Resell' },
        { src: icon3, caption: 'Reconnect' },
    ];

    return (
        <section className="banner" id="home">
            <div className="banner-block">
                <Row className="icon-container">
                    {icons.map((item, index) => (
                        <Col sm={3} md={3} className="icon-wrapper" key={index}>
                            <div >
                                <img src={item.src} className="icon" alt={`Icon ${index + 1}`} />
                                <div className="icon-caption">{item.caption}</div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="banner-text container" id="intro">
                <p>The innovative secondhand marketplace <span> redefining sustainable lifestyle. </span>Experience the perfect blend of an online marketplace and offline engagement, where you can connect with like-minded individuals, foster genuine interpersonal connections, and indulge in an aesthetic and style-focused community. </p>
                <p>Get ready to celebrate your unique style, make lasting connections, and embrace the fun side of sustainable lifestyle. </p>
            </div>
        </section>
    )
}