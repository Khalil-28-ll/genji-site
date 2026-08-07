import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CharacterPage from './components/CharacterPage';
import NotFoundPage from './components/NotFoundPage';
import Layout from './components/Layout';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
