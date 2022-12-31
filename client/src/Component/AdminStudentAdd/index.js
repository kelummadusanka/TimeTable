import React, { useState } from 'react'
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';

import { studentData } from './data';

function Dashboard() {

    const [students, setStudents] = useState(studentData);
    const [selectedstudent, setSelectedStudent] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [student] = students.filter(student => student.id === id);

        setSelectedStudent(student);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [student] = students.filter(student => student.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${student.firstName} ${student.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setStudents(students.filter(student => student.id !== id));
            }
        });
    }


    return (
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        students={students}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    students={students}
                    setstudents={setStudents}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    students={students}
                    selectedstudent={selectedstudent}
                    setstudents={setStudents}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    )
}

export default Dashboard;