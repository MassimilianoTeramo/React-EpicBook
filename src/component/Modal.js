import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CommentArea() {
  return (
    <>
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Leave a comment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
             <input 
                name="MyInput"
                type='text'
         />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </>
  );
}

export default CommentArea;