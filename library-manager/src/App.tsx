import BookList from "./components/organisms/BookList";
import { Container } from "@mui/material";
import ResponsiveAppBar from "./components/molecules/Navbar";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <BookList />
      </Container>
    </>
  );
}

export default App;
