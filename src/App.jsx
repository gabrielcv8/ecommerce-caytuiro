import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListConteiner";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greatings="Bienvenidos a SAYU, estamos actualizando su servicio para una mejor experiencia." />
    </>
  );
}

export default App;
