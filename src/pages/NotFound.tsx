import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith("/en");
  const homeLink = isEnglish ? "/en" : "/pt";
  const linkText = isEnglish ? "Return to Home" : "Voltar para a Home";
  const pageNotFoundText = isEnglish
    ? "Oops! Page not found"
    : "Ops! Página não encontrada";

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-gray-400 mb-6">{pageNotFoundText}</p>
        <Link
          to={homeLink}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md text-base font-medium"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
