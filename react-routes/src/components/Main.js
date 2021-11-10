import { Route, Routes } from 'react-router-dom';
import Article from './Article';
import Articles from './Articles';
import Books from './Books';
import Help from './Help';
import Home from './Home';
import NotFound from './NotFound';
import People from './People';

function Main() {
  return (
    <div className="page-content">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/help" element={<Help />} />
        <Route path="/articles" element={<Articles />} exact />

        <Route path="/articles/:slug" element={<Article />} />

        <Route path="/people" element={<People />} />
        <Route path="/books" element={<Books />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Main;
