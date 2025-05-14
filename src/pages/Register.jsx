import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('auth', 'true');
    navigate('/');
  };

  return (
    <form onSubmit={handleRegister} className="auth-form">
      <input type="text" placeholder="Usuario" required /><br />
      <input type="password" placeholder="Contraseña" required /><br />
      <input type="text" placeholder="Nombre" required /><br />
      <input type="email" placeholder="Correo" required /><br />
      <button type="submit">Registrarse</button>
      <Link to="/login">¿Ya tiene una cuenta?</Link>
    </form>
  );
};

export default Register;