import React, { useState } from 'react';

function UusiLukema() {
  const [asunto, setAsunto] = useState('');
  const [paivamaara, setPaivamaara] = useState('');
  const [vesilukema, setVesilukema] = useState('');
  const [lisatiedot, setLisatiedot] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tähän kohtaan myöhemmin tallennus backend-tietokantaan
    alert(
      `Asunnon numero: ${asunto}\nPäivämäärä: ${paivamaara}\nVesilukema: ${vesilukema}\nLisätietoja: ${lisatiedot}`
    );
  };

  return (
    <section>
      <h2>Uusi lukema</h2>
      <form onSubmit={handleSubmit} className="p-3">
        <div className="mb-3">
          <label className="form-label">Asunnon numero</label>
          <input
            className="form-control"
            value={asunto}
            onChange={e => setAsunto(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Lukeman päivämäärä</label>
          <input
            className="form-control"
            type="date"
            value={paivamaara}
            onChange={e => setPaivamaara(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Vesilukema</label>
          <input
            className="form-control"
            type="number"
            value={vesilukema}
            onChange={e => setVesilukema(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Lisätietoja</label>
          <textarea
            className="form-control"
            value={lisatiedot}
            onChange={e => setLisatiedot(e.target.value)}
            placeholder="Voit ilmoittaa esim. kulutuspoikkeaman syyn tällä lomakkeella"
          />
        </div>
        <button className="btn btn-primary" type="submit">Lähetä</button>
      </form>
    </section>
  );
}

export default UusiLukema;