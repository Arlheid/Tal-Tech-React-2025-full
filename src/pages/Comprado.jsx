import { Link } from 'react-router-dom';

export default function Adquirido() {
  return (
    <div className="container text-center mt-5">
      <h2>Compra realizada</h2>
      <Link to="/" className="btn btn-success mt-3">
        Home
      </Link>
    </div>
  );
}