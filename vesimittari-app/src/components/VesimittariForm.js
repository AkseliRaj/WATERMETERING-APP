import React, { useState } from 'react';

function VesimittariForm() {
    const [nimi, setNimi] = useState('');
    const [lukema, setLukema] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nimi: ${nimi}, Lukema: ${lukema}`);
        // Tähän kohtaan myöhemmin tallennus backend-tietokantaan
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="p-5">
                <div className="mb-5">
                    <label className="form-label">Nimi</label>
                    <input className="form-control" value={nimi} onChange={e => setNimi(e.target.value)} required />
                </div>
                <div className="mb-5">
                    <label className="form-label">Vesimittarin lukema</label>
                    <input className="form-control" type="number" value={lukema} onChange={e => setLukema(e.target.value)} required />
                </div>
                <button className="btn btn-primary" type="submit">Lähetä</button>
            </form>
        </div>

    );
}

export default VesimittariForm;