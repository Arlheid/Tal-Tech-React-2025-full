import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/Shop');
  };

  return (
    <div className="container text-center mt-5">
      <h2>Iniciar Sesión</h2>
      <button className="btn btn-primary mt-3" onClick={handleLogin}>
        Ingresar
      </button>
    </div>
  );
}
