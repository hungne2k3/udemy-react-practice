import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ModalAddNewUser from './ModalAddNewUser';
import { fetchAllUser } from '../services/UserServices'; import ReactPaginate from 'react-paginate';

const TableUser = (props) => {
    const [listUSer, setListUser] = useState([]);
    const [totalUser, setTotalUser] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [isShowModalAdd, setIsShowModalAdd] = useState(false);

    const handleClose = () => {
        setIsShowModalAdd(false)
    }

    const handleUppdateUser = (user) => {
        setListUser([user, ...listUSer])
    }

    // call Api
    useEffect(() => {
        // call pagination deafult 1
        getUSer(1);
    }, []);

    const getUSer = async (page) => {
        let reqres = await fetchAllUser(page);

        // kt trong trường hợp Api bị lỗi k trả về responsive nếu dùng reqres.data thì ứng dụng sẽ bị chết. Vâyj nên tránh trường hợp đấy thì dùng đk && để check
        if (reqres && reqres.data) {
            setTotalUser(reqres.total);
            setListUser(reqres.data);
            setTotalPages(reqres.total_pages);
        }
    }

    const handlePageClick = (event) => {
        // event click page
        // "+" đằng trc event để nếu là string thì chuyển qua number
        getUSer(+ event.selected + 1)
    }

    return (
        <>
            <div className='my-3 add-new'>
                <span><p>List User: </p></span>
                <button
                    className='btn btn-success'
                    onClick={() => setIsShowModalAdd(true)}
                >
                    Add new user
                </button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {listUSer && listUSer.length > 0 &&
                        listUSer.map((item, index) => (
                            <tr key={`user-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                containerClassName='pagination'
                activeClassName='active'
            />

            <ModalAddNewUser
                show={isShowModalAdd}
                handleClose={handleClose}
                handleUppdateUser={handleUppdateUser}
            />
        </>
    )
}

export default TableUser