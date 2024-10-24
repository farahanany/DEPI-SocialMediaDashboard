import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const Table = () => {
    const [records, setRecords] = useState([]);
    const [filteredRecords, setFilteredRecords] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const columns = [
        {
            name: '',
            selector: row => row.Avatar,
            cell: row => (
                <img
                    src={row.Avatar}
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
            selector: row => row.Email,
            sortable: true
        },
        {
            name: 'Full Name',
            selector: row => `${row.Fname} ${row.Lname}`, // Corrected template literal
            sortable: true
        },
        {
            name: 'Account Type',
            selector: row => row.AccountType,
            cell: row => (
                <div
                    style={{
                        borderRadius: '10px',
                        border: `2px solid ${row.AccountType === 'Business' ? '#1c6b92' : 'gray'}`, // Corrected template literal
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
            selector: row => row.AddedDate,
            sortable: true
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
                            onChange={() => toggleStatus(row.Email)}
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
            selector: row => row.Action,
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
                    onClick={() => handleViewProfile(row.Email)}
                >
                    View Profile
                </button>
            ),
            sortable: true
        },
    ];

    // Fetch user data from the API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/users');
                setRecords(response.data);
                setFilteredRecords(response.data); // Initialize filtered records
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleFilter = () => {
        const newData = records.filter(row => {
            const fullName = `${row.Fname} ${row.Lname}`.toLowerCase(); // Corrected template literal
            return fullName.includes(searchTerm.toLowerCase());
        });
        setFilteredRecords(newData); // Update filtered records
    };

    const toggleStatus = (email) => {
        const updatedRecords = records.map(record => {
            if (record.Email === email) {
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
