import Board from "./Components/Board";
import Header from "./Components/Header";
import Globalstyles from "./Styles/Globalstyles";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
      <Globalstyles />
    </DndProvider>
  );
}

export default App;
