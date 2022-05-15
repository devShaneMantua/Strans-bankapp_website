import { Navbar, Header, Features, About, Install, Footer } from "./containers";

import "./styles.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Features />
    <About />
    <Install />
    <Footer />
  </div>
);

export default App;
