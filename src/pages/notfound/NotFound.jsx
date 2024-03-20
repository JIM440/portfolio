import { Link } from 'react-router-dom';
import UseScrollTop from '../../common/components/UseScrollTop';

const NotFound = () => {
  const scrollToTop = UseScrollTop();

  return (
    // <!-- ==== not found ==== -->
    <section id="notFound">
      <div className="container">
        <h1>404</h1>
        <p>Sorry 😥 , can't find this page</p>
        <p>
          <span>Return to </span>
          <Link to="/" aria-label="link to home page">
            Home Page
          </Link>
        </p>
      </div>
    </section>
  );
};

export default NotFound;
