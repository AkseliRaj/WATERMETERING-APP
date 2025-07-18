import React, { useState } from 'react';

function SignIn({ onSignIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simple authentication - in a real app, this would connect to a backend
        if (username && password) {
            // For demo purposes, accept any non-empty credentials
            // In production, this would validate against a database
            onSignIn({ username, isAdmin: username === 'admin' });
            setError('');
        } else {
            setError('Käyttäjätunnus ja salasana vaaditaan');
        }
    };

    return (
        <div className="p-4">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Kirjaudu sisään</h2>
                            
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Käyttäjätunnus</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={username} 
                                        onChange={e => setUsername(e.target.value)}
                                        placeholder="Syötä käyttäjätunnus"
                                        required
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label">Salasana</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        value={password} 
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="Syötä salasana"
                                        required
                                    />
                                </div>
                                
                                <button type="submit" className="btn btn-primary w-100">
                                    Kirjaudu
                                </button>
                            </form>
                            
                            <div className="mt-3 text-center">
                                <small className="text-muted">
                                    Kirjaudu sisään käyttääksesi vedenkäyttöilmoituslomaketta
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn; 