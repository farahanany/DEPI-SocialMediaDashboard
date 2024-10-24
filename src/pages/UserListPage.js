import React from 'react';
import '../styles/UserListPage.css';
import Table from '../components/Table'; 
import Sidebar from '../components/Sidebar'; // Import the Sidebar

function UserListPage({ userlists }) { // Receive userlists as props
    return (
        <div className="user-list-page">
            <Sidebar /> 
            <div className="content"> 
                <h1>Users List</h1>
                <Table userlists={userlists} /> 
            </div>
        </div>
    );
}

export default UserListPage;
