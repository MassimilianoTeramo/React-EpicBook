import {Card, Col, Row} from "react-bootstrap";
import libri from "../dati/fantasy.json";

const FantasyBooks = ()=>{
    return(
        <Row>
            {libri.map((libro) => {
                return(
                    <Col key={libro.asin} sm={6} md={4} lg={3} xl={3}>
                        <Card className="MyCard">
                            <Card.Img variant="top" src={libro.img} className="MyImg" />
                            <Card.Body>
                                <Card.Title className="text-truncate">{libro.title}</Card.Title>
                                <Card.Text>
                                    <span class="badge bg-danger text-uppercase ms-2">{libro.category}</span>
                                    <span class="ms-2">ASIN:{libro.asin}</span>
                                </Card.Text>
                                <div className="d-flex justify-content-between align-items-center">
                                <a href="#" class="btn btn-primary"><i class="bi bi-cart"></i>
                                </a>
                                <strong>€{libro.price.toFixed(2)}</strong>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>


    );
}
export default FantasyBooks;