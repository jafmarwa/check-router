import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';

const Add = ({ adding }) => {
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({
    name: "",
    poster: "",
    description: "",
    rate: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onStarClick=(nextValue,prevValue,name)=>{

    setNewMovie({...newMovie,rate:nextValue})  }
  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
  }


  return (
    <div>
      <Button className='btn-add' variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal className='modal' show={show} onHide={handleClose}>


        <Modal.Body>
          <Form>
            <InputGroup>
              <InputGroup.Text>name</InputGroup.Text>
              <Form.Control as="textarea" aria-label="With textarea" onChange={handleChange} name="name" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">
                image URL
              </InputGroup.Text>
              <Form.Control id="basic-url" aria-describedby="basic-addon3" onChange={handleChange} name="poster" />
            </InputGroup>

            <InputGroup>
              <InputGroup.Text>description</InputGroup.Text>
              <Form.Control as="textarea" aria-label="With textarea" onChange={handleChange} name="description" />
            </InputGroup>

            <InputGroup>

              <StarRatingComponent  
          name="rate" 
          starCount={5}
          value={newMovie.rate}
          onStarClick={onStarClick}
          starColor={"#ff8c00"}
          emptyStarColor={"#ffffff"}/>    
          
          
              <InputGroup.Text>rate</InputGroup.Text>
              <Form.Control as="textarea" aria-label="With textarea" onChange={handleChange} name="rate" />
            </InputGroup>
          

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => { adding(newMovie); handleClose() }} >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
    </div >
  );
}

export default Add;
