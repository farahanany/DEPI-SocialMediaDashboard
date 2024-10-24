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
            selector: row => row.avatar, // Correct field name from schema
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
            selector: row => row.email, // Correct field name from schema
            sortable: true
        },
        {
            name: 'Full Name',
            selector: row => row.fullname, // Correct field name from schema
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
            selector: row => row.createdAt, // Use Mongoose timestamps
            sortable: true,
            format: row => new Date(row.createdAt).toLocaleDateString() // Format date
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
                            onChange={() => toggleStatus(row.email)} // Correct field name from schema
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
                    onClick={() => handleViewProfile(row.email)} // Correct field name from schema
                >
                    View Profile
                </button>
            ),
            ignoreRowClick: true, // Prevent row click event
            allowOverflow: true,
            button: true
        },
    ];

    const handleFilter = () => {
        const newData = records.filter(row => {
            const fullName = row.fullname.toLowerCase(); // Correct field name from schema
            return fullName.includes(searchTerm.toLowerCase());
        });
        setFilteredRecords(newData); // Update filtered records
    };

    const toggleStatus = (email) => {
        const updatedRecords = records.map(record => {
            if (record.email === email) { // Correct field name from schema
                return {
                    ...record,
                    AccountStatus: record.AccountStatus === 'Active' ? 'Inactive' : 'Active'
                };
            }
            return record;
        });
        setRecords(updatedRecords);
        setFilteredRecords(updatedRecords); // Update filtered records as well
    };

    const handleViewProfile = (email) => {
        console.log(`Viewing profile for: ${email}`); // Corrected string interpolation
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/path/to/your/api/endpoint'); // Adjust the API endpoint
                setRecords(response.data); // Assuming response data is an array of users
                setFilteredRecords(response.data); // Initialize filtered records
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='container mt-5'>
            <div className='text-end'>
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Search User"
                    className="custom-search-input"
                />
                <button 
                    onClick={handleFilter} 
                    className='btn btn-primary ms-2 custom-search-button'>
                    Search
                </button>
            </div>
            <DataTable
                columns={columns}
                data={filteredRecords} // Use filtered records for data
                selectableRows
                fixedHeader
                pagination
            />
        </div>
    );
};

export default Table;
