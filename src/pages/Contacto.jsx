const Contacto = () => (
    <div>
      <h2 className="page-title">Contáctanos</h2>
      <form>
        <input type="text" placeholder="Nombre completo" /><br />
        <input type="email" placeholder="Correo electrónico" /><br />
        <textarea placeholder="Tienes dudas?.. Escribe tu mensaje." rows="4" style={{ width: '100%' }}></textarea><br />
        <button type="submit">Enviar</button>
      </form>
      <p><strong>Teléfono:</strong> (123) 456-7890</p>
      <p><strong>Email:</strong> cesde@cesde.edu.co</p>
      <p><strong>Ubicación:</strong> Dg. 50A #38 20 Piso 5, Hermosa Provincia, Bello, Antioquia</p>
      <div>
        <iframe
          title="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
  
  export default Contacto;