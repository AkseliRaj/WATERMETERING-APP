import React, { useState } from 'react';

function AdminPanel({ onSignOut }) {
    const [newUser, setNewUser] = useState({ username: '', apartment: '', password: '' });
    const [users, setUsers] = useState([
        { id: 1, username: 'asunto1', apartment: 'A1', password: 'salasana123' },
        { id: 2, username: 'asunto2', apartment: 'A2', password: 'salasana123' },
        { id: 3, username: 'asunto3', apartment: 'A3', password: 'salasana123' }
    ]);
    const [readings, setReadings] = useState([
        { id: 1, username: 'asunto1', apartment: 'A1', date: '2024-01-15', reading: 1250, notes: 'Normaali kulutus' },
        { id: 2, username: 'asunto2', apartment: 'A2', date: '2024-01-15', reading: 980, notes: '' },
        { id: 3, username: 'asunto3', apartment: 'A3', date: '2024-01-15', reading: 2100, notes: 'Korkea kulutus - tarkistettu' }
    ]);

    const handleAddUser = (e) => {
        e.preventDefault();
        if (newUser.username && newUser.apartment && newUser.password) {
            const user = {
                id: users.length + 1,
                ...newUser
            };
            setUsers([...users, user]);
            setNewUser({ username: '', apartment: '', password: '' });
        }
    };

    const handleDeleteUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    return (
        <div className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Hallintapaneeli</h1>
                <button className="btn btn-outline-secondary" onClick={onSignOut}>
                    Kirjaudu ulos
                </button>
            </div>

            <div className="row">
                {/* User Management */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>Käyttäjien hallinta</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleAddUser} className="mb-3">
                                <div className="row">
                                    <div className="col-md-4 mb-2">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Käyttäjätunnus"
                                            value={newUser.username}
                                            onChange={e => setNewUser({...newUser, username: e.target.value})}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4 mb-2">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Asunto"
                                            value={newUser.apartment}
                                            onChange={e => setNewUser({...newUser, apartment: e.target.value})}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4 mb-2">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Salasana"
                                            value={newUser.password}
                                            onChange={e => setNewUser({...newUser, password: e.target.value})}
                                            required
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success">
                                    Lisää käyttäjä
                                </button>
                            </form>

                            <div className="table-responsive">
                                <table className="table table-sm">
                                    <thead>
                                        <tr>
                                            <th>Asunto</th>
                                            <th>Käyttäjätunnus</th>
                                            <th>Toiminnot</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map(user => (
                                            <tr key={user.id}>
                                                <td>{user.apartment}</td>
                                                <td>{user.username}</td>
                                                <td>
                                                    <button 
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => handleDeleteUser(user.id)}
                                                    >
                                                        Poista
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Readings Overview */}
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>Vesilukemien yleiskatsaus</h3>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-sm">
                                    <thead>
                                        <tr>
                                            <th>Asunto</th>
                                            <th>Päivämäärä</th>
                                            <th>Lukema</th>
                                            <th>Huomioita</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {readings.map(reading => (
                                            <tr key={reading.id}>
                                                <td>{reading.apartment}</td>
                                                <td>{reading.date}</td>
                                                <td>{reading.reading}</td>
                                                <td>
                                                    <small className="text-muted">
                                                        {reading.notes || '-'}
                                                    </small>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPanel; 