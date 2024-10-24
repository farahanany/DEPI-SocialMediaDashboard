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
            name: 'Username',
            selector: row => row.username,
            sortable: true
        },
        {
            name: 'Gender',
            selector: row => row.gender,
            sortable: true
        },
        {
            name: 'Account Status',
            selector: row => row.accountStatus,
            cell: row => (
                <span className={`badge ${row.accountStatus === 'Active' ? 'bg-success' : 'bg-danger'}`}>
                    {row.accountStatus}
                </span>
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
            record.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
            record.username.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredRecords(filteredData);
    };

    const handleViewProfile = (email) => {
        // Navigate to the user profile page or show a modal with user details
        alert(`Viewing profile for ${email}`); // Replace with your actual navigation or modal code
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name, username, or email"
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
                highlightOnHover
                selectableRows
            />
        </div>
    );
};

export default Table;
