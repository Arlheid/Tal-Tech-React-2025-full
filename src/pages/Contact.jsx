import { useState } from 'react';

export default function Contacto() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/mayvzxyz', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Contactanos</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <p>Correo: <a href="mailto:mymail@nomail.com">mymail@nomail.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/12111555555" target="_blank" rel="noopener noreferrer">+012 1 11 5555 5555</a></p>
          <p>Horario de atención: Lunes a Viernes de 9:00 a 19:00 hs</p>

          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" name="nombre" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">Comentarios</label>
              <textarea className="form-control" id="mensaje" name="mensaje" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>

        </div>
      </div>
    </div>
  );
}
