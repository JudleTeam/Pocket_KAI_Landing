import { AboutUs } from './components/layout/AboutUs';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Links } from './components/layout/Links';
import { Main } from './components/layout/Main';
import { Overview } from './components/layout/Overview';

function App() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col min-h-[100vh] bg-gradient-to-b from-[#000000] to-[#272525]">
        <Header />
        <Main />
      </div>
      <Overview />
      <AboutUs />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
