import BookList from "./components/organisms/BookList";
import AddBookModal from "./components/molecules/AddBookModal";
import { Container } from "@mui/material";
import ResponsiveAppBar from "./components/molecules/Navbar";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <BookList />
        <AddBookModal />
      </Container>
    </>
  );
}

export default App;
