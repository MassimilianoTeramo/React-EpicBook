import { useState } from 'react';
import { Card } from "react-bootstrap";

const SingleBook = ({libro}) => {
    
    const [Selected, setSelected] = useState(false);


    return(
            <Card 
                className={`myCard ${Selected ? "selected" : ""}`}
                onClick={() => setSelected(!Selected)}
            >
                    <div style={{
                        backgroundImage: `url(${libro.img})`,
                        height: "25rem",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }} 
                    >

                </div>
                <Card.Body>
                    <Card.Title className="text-truncate">{libro.title}</Card.Title>
                    <Card.Text>
                        <span className="badge bg-danger text-uppercase ms-2">{libro.category}</span>
                        <span className="ms-2">ASIN:{libro.asin}</span>
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <a href="#" className="btn btn-primary"><i className="bi bi-cart"></i>
                        </a>
                        <strong>€{libro.price.toFixed(2)}</strong>
                    </div>
                </Card.Body>
            </Card>
    )
}
export default SingleBook;