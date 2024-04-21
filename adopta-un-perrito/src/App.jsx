import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componentes/header/Header";
import MyCard from "./componentes/myCard/MyCard";
import Footer from "./componentes/footer/Footer";
function App() {
  return (
    <>
      <div className="titulo">
        <Header />
      </div>
      <div className="d-flex">
        <MyCard
          nombre="Bartolo"
          descripcion="Elegante, tranquilo, mantiene las distancias con los extraños; buen guardián y tolera el juego con los niños."
          image="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600"
          colorBadge="primary"
          textBadge="Soy Bartolo"
        />
        <MyCard
          nombre="Morita"
          descripcion="Muy calmada y siempre alerta, buena guardiana, obediente y muy fiel. Me gusta tomar siesta despues de pasear."
          image="https://images.pexels.com/photos/1078089/pexels-photo-1078089.jpeg?auto=compress&cs=tinysrgb&w=600"
          colorBadge="danger"
          textBadge="Soy Morita"
        />
        <MyCard
          nombre="Zeus"
          descripcion="Muy juguetón y cariñoso, inteligente, obediente, le gusta la socialización con sus pares. Buen compañero para salidas al parque."
          image="https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=600"
          colorBadge="warning"
          textBadge="Soy Zeus "
        />
        <MyCard
          nombre="Kratos"
          descripcion="Tranquilo y muy noble, buscará vincularse con alguien de la familia para jugar. Muy buena disposición para aprender nuevos trucos."
          image="https://images.pexels.com/photos/46505/swiss-shepherd-dog-dog-pet-portrait-46505.jpeg?auto=compress&cs=tinysrgb&w=600"
          colorBadge="success"
          textBadge="Soy Kratos"
        />
      </div>
      <div className="my-3">
        <Footer />
      </div>
    </>
  );
}

export default App;
