import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ColourPicker from "./components/ColorPicker";
function App() {
  return (
    <div class="background d-flex flex-column justify-content-center align-items-center">
      <h1 class="text-center h1 fw-bold">Color Picker</h1>
      <ColourPicker />
    </div>
  );
}

export default App;
