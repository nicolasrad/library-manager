import BookList from "./components/organisms/BookList";
import AddBookModal from "./components/molecules/AddBookModal";
import { Container } from "@mui/material";

function App() {
  return (
    <Container>
      <BookList />
      <AddBookModal />
    </Container>
  );
}

export default App;
