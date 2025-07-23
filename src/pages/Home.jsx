import ProductList from '../components/ProductList';
import { Link as ScrollLink } from 'react-scroll';

export default function Home() {
  return (
    <>
      <section id="productos" className="container mt-5">
        <h2 className="mb-4 text-center">Catálogo de Productos</h2>
        <ProductList />
      </section>
      <section id="mapa_donde_estamos">
        <div className="mt-5 animate-fade">
          <h3 className="mb-3 text-center">Nuestra Sucursal</h3>
          <p className="text-center">
            Estamos en Calle Dolores 314, C.A.B.A. Buenos Aires, Argentina
          </p>
          <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
            <iframe
              title="Donde estamos"
              src="https://www.google.com/maps?q=Dolores+314,+CABA,+Argentina&output=embed"
              width="45%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
