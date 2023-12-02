import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

const App = () => {

  const greeting = "Bienvenidos a la mejor tienda de materiales deportivos!"

  return (
    <div>
    <NavBar />;
    <ItemListContainer 
      greeting={greeting}
    />
    </div>
  )
};

export default App;
