import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center mt-5 animate-fade">
      <h1 className="display-1">404</h1>
      <h2 className="mb-3">Page not Found</h2>
      <img
        src={custom404}
        alt="Page not found"
        style={{
          maxWidth: '260px',
          margin: '2rem auto',
          display: 'block',
          animation: 'fadeUp 0.8s ease'
        }}
      />
      <Link to="/" className="btn btn-primary mt-4">
        <i className="bi bi-house-door me-2"></i> Home
      </Link>
    </div>
  );
}
