import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalAddNewUser = (popos) => {
    const { show, handleClose } = popos;
    const [name, setName] = useState("");
    const [job, setJob] = useState('');

    const handleSaveUser = () => {
        console.log(">>> Check: Name = ", name , "job = ", job)
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Job
                            </label>
                            <input type="text" className="form-control"
                            value={job}
                            onChange={(event) => setJob(event.target.value)}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalAddNewUser