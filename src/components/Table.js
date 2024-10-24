import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from '../utils/axios';

const Table = () => {
    const [records, setRecords] = useState([]);
    const [filteredRecords, setFilteredRecords] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const columns = [
        {
            name: 'Avatar',
            selector: row => row.avatar,
            cell: row => (
                <img
                    src={row.avatar}
                    alt="Avatar"
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        marginRight: '10px'
                    }}
                />
            ),
            sortable: true
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'Full Name',
            selector: row => row.fullname,
            sortable: true
        },
        {
            name: 'Account Type',
            selector: row => row.AccountType,
            cell: row => (
                <div
                    style={{
                        borderRadius: '10px',
                        border: `2px solid ${row.AccountType === 'Business' ? '#1c6b92' : 'gray'}`,
                        padding: '7px 20px',
                        display: 'inline-block',
                        color: 'black',
                    }}
                >
                    {row.AccountType}
                </div>
            ),
            sortable: true
        },
        {
            name: 'Added Date',
            selector: row => row.createdAt,
            sortable: true,
            format: row => new Date(row.createdAt).toLocaleDateString()
        },
        {
            name: 'Account Status',
            selector: row => row.AccountStatus,
            cell: row => (
                <div className="d-flex align-items-center">
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={row.AccountStatus === 'Active'}
                            onChange={() => toggleStatus(row.email)}
                        />
                        <span className="slider"></span>
                    </label>
                    <span className={`badge ${row.AccountStatus === 'Active' ? 'bg-success' : 'bg-danger'} me-2`}>
                        {row.AccountStatus}
                    </span>
                </div>
            ),
            sortable: true
        },
        {
            name: 'Action',
            cell: row => (
                <button
                    style={{
                        backgroundColor: '#1c6b92',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '10px 10px',
                        cursor: 'pointer'
                    }}
                    onClick={() => handleViewProfile(row.email)}
                >
                    View Profile
                </button>
            )
        }
    ];

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                console.log('Fetched users:', response.data); // Log fetched users
                setRecords(response.data);
                setFilteredRecords(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filteredData = records.filter(record =>
            record.fullname.toLowerCase().includes(e.target.value.toLowerCase()) ||
            record.email.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredRecords(filteredData);
        console.log('Filtered records:', filteredData); // Log filtered records
    };

    const toggleStatus = async (email) => {
        try {
            const user = records.find(record => record.email === email);
            console.log('Current user:', user); // Log current user
            const updatedStatus = user.AccountStatus === 'Active' ? 'Inactive' : 'Active';
            await axios.put(`/api/users/${email}`, { AccountStatus: updatedStatus });
            console.log('Updated user status:', { email, AccountStatus: updatedStatus }); // Log updated status
            setRecords(prevRecords =>
                prevRecords.map(record =>
                    record.email === email ? { ...record, AccountStatus: updatedStatus } : record
                )
            );
        } catch (error) {
            console.error('Error updating user status:', error);
        }
    };

    const handleViewProfile = (email) => {
        // Navigate to the user profile page or show a modal with user details
        alert(`Viewing profile for ${email}`); // Replace with your actual navigation or modal code
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={handleSearch}
                style={{
                    margin: '10px 0',
                    padding: '8px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    width: '100%'
                }}
            />
            <DataTable
                columns={columns}
                data={filteredRecords}
                pagination
                striped
                highlightOnHover
                pointerOnHover
                noDataComponent="No users found"
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10, 20]}
            />
        </div>
    );
};

export default Table;
