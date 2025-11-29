import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-academic-blue-800 mb-4">404</h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Search className="w-6 h-6 text-gray-400" />
            <h2 className="text-3xl font-semibold text-gray-800">Page Not Found</h2>
          </div>
          <p className="text-gray-600 text-lg mb-8">
            Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-academic-blue-800 text-white px-8 py-3 rounded-lg hover:bg-academic-blue-700 transition-colors font-medium"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about" className="link-primary">
                About Us
              </Link>
              <Link to="/faculty" className="link-primary">
                Faculty
              </Link>
              <Link to="/research" className="link-primary">
                Research
              </Link>
              <Link to="/contact" className="link-primary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
