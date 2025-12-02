import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      Pagina no encontrada
      <Link to="/">Volver al inicio</Link>
    </>
  );
}
