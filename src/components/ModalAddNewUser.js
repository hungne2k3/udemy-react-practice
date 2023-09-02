import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postCreateUser } from '../services/UserServices';
import { toast } from 'react-toastify';


const ModalAddNewUser = (popos) => {
    const { show, handleClose, handleUppdateUser } = popos;
    const [name, setName] = useState("");
    const [job, setJob] = useState('');

    // Add user
    const handleSaveUser = async () => {
        let res = await postCreateUser(name, job)
        console.log(">>> Check: Res = ", res);

        if (res && res.id) {
            // success
            handleClose();
            setName('');
            setJob('');
            // sau khi add thanh cong thi bắn ra thông báo (toastifi)
            toast.success("A user create succeed!");
            handleUppdateUser({first_name: name, is: res.id})
        }
        else {
            // erro
            toast.error("An Error!");
        }
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