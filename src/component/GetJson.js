import {Form, Col, Row} from "react-bootstrap";
import libri from "../dati/fantasy.json";
import SingleBook from "./SingleBook";
import { useState } from "react";

const FantasyBooks = ()=>{
    const [searchBook, setSearchBook] = useState("");
    const FilterBooks = libri.filter((libro) => libro.title.toLowerCase().includes(searchBook.toLowerCase()));

    return(
        <>
            <Row className="mt-5 mb-4">
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Control 
                                type="text" 
                                placeholder="Search Book"
                                value = {searchBook}
                                onChange={(e) => setSearchBook(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                {FilterBooks.map((libro) => {
                    return(
                        <Col key={libro.asin} sm={6} md={4} lg={3} xl={3} className="mb-3">
                            <SingleBook libro={libro}/> 
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}


export default FantasyBooks;