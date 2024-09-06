import { useEffect } from 'react';
import { AboutUs } from './components/layout/AboutUs';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { HowToUse } from './components/layout/HowToUse';
import { Links } from './components/layout/Links';
import { Main } from './components/layout/Main';
import { Overview } from './components/layout/Overview';
function App() {
  useEffect(() => {
    // Убираем якорь из URL
    const urlWithoutHash = window.location.href.split('#')[0];
    window.history.replaceState(null, '', urlWithoutHash);
  }, []);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col min-h-[100vh] bg-gradient-to-b from-[#000000] to-[#272525]">
        <Header />
        <Main />
      </div>
      <Overview />
      <AboutUs />
      <Links />
      <HowToUse />
      <Footer />
    </div>
  );
}

export default App;
