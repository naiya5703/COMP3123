import React, { Component } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

class PersonList extends Component {
    state = {
        persons: [], 
    };

    
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then((res) => {
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch((err) => console.error(err));
    }

    render() {
        return (
            <Container className="mt-4">
                <h1 className="text-center text-white bg-success py-3">User List</h1>
                <Row>
                    {this.state.persons.map((person, index) => (
                        <Col md={6} key={index} className="mb-4">
                            <Card bg="info" text="white" className="shadow">
                                <Card.Body>
                                    <Row>
                                        <Col md={4}>
                                            <Card.Img
                                                variant="top"
                                                src={person.picture.large}
                                                alt="User Avatar"
                                                className="rounded-circle"
                                            />
                                        </Col>
                                        <Col md={8}>
                                            <Card.Title>
                                                {`${person.name.title} ${person.name.first} ${person.name.last}`}
                                            </Card.Title>
                                            <Card.Text>
                                                <strong>User Name:</strong> {person.login.username}
                                                <br />
                                                <strong>Gender:</strong> {person.gender.toUpperCase()}
                                                <br />
                                                <strong>Time Zone:</strong> {person.location.timezone.description}
                                                <br />
                                                <strong>Address:</strong>{" "}
                                                {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} - ${person.location.postcode}`}
                                                <br />
                                                <strong>Email:</strong> {person.email}
                                                <br />
                                                <strong>Birth Date:</strong> {person.dob.date} ({person.dob.age} years)
                                                <br />
                                                <strong>Register Date:</strong> {person.registered.date}
                                                <br />
                                                <strong>Phone:</strong> {person.phone}
                                                <br />
                                                <strong>Cell:</strong> {person.cell}
                                            </Card.Text>
                                            <Button variant="primary">Details</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default PersonList;
