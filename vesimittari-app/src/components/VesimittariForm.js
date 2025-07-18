import React, { useState } from 'react';

function VesimittariForm() {
    const [nimi, setNimi] = useState('');
    const [paivamaara, setPaivamaara] = useState('');
    const [vesilukema, setVesilukema] = useState('');
    const [lisatietoja, setLisatietoja] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nimi: ${nimi}, Päivämäärä: ${paivamaara}, Vesilukema: ${vesilukema}, Lisätietoja: ${lisatietoja}`);
        // Tähän kohtaan myöhemmin tallennus backend-tietokantaan
    };

    return (
        <div className="container p-4">
            <h2 className="mb-3 mt-5">Vedenkäyttöilmoitus</h2>
            <form onSubmit={handleSubmit} className="col-10 pt-4">
                <div className="mb-4">
                    <label className="form-label">Nimi</label>
                    <input className="form-control" value={nimi} onChange={e => setNimi(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label className="form-label">Lukeman päivämäärä</label>
                    <input className="form-control" type="date" value={paivamaara} onChange={e => setPaivamaara(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label className="form-label">Vesilukema</label>
                    <input className="form-control" type="number" value={vesilukema} onChange={e => setVesilukema(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label className="form-label">Lisätietoja</label>
                    <textarea 
                        className="form-control" 
                        rows="3" 
                        value={lisatietoja} 
                        onChange={e => setLisatietoja(e.target.value)}
                        placeholder="Voit esittää esimerkiksi kulutuspoikkeaman syyn."
                    ></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Lähetä</button>
            </form>
        </div>
    );
}

export default VesimittariForm;