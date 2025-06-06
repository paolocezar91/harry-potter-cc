import { Outlet } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import { ThemeProvider } from './components/ThemeContext';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <div className="app">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;