import Comments from "./components/comments/Comments";
import Development from "./components/development/Development";
import Discount from "./components/discount/Discount";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Partners from "./components/partners/Partners";
import Support from "./components/support/Support";
import Technologies from "./components/technologies/Technologies";


function App() {
  return (
      <>
      <Header />
      <Main />
      <Discount />
      <Technologies />
      <Development />
      <Support />
      <Comments />
      <Partners />
      <Footer />
      </>
  );
}

export default App;
