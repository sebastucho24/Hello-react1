import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('auth', 'true');
    navigate('/');
  };

  return (
    <form onSubmit={handleLogin} className="auth-form">
      <h2>INICIA SESION</h2>
      <input type="text" placeholder="Usuario" required /><br />
      <input type="password" placeholder="Contraseña" required /><br />
      <button type="submit">Iniciar Sesión</button>
      <Link to="/registro">¿No tiene una cuenta?</Link>
    </form>
  );
};

export default Login;