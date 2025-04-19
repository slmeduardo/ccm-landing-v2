import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LanguageSwitcher = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState<"pt" | "en">("pt");

  useEffect(() => {
    // Define a linguagem atual com base na URL
    if (location.pathname.startsWith("/en")) {
      setCurrentLang("en");
    } else if (location.pathname.startsWith("/pt")) {
      setCurrentLang("pt");
    } else {
      // Se estamos em uma rota que não tem prefixo de idioma, assumimos pt como padrão
      setCurrentLang("pt");
    }
  }, [location.pathname]);

  const switchLanguage = () => {
    // Salva a linguagem preferida no localStorage
    const newLang = currentLang === "pt" ? "en" : "pt";
    localStorage.setItem("preferredLanguage", newLang);

    // Navega para a mesma rota, mas com o prefixo de idioma alterado
    const currentPath = location.pathname;

    // Se já estamos em uma rota com prefixo de idioma
    if (currentPath.startsWith("/pt/") || currentPath.startsWith("/en/")) {
      const pathWithoutLang = currentPath.substring(3); // Remove "/pt" ou "/en"
      navigate(`/${newLang}${pathWithoutLang}`);
    }
    // Se estamos na rota raiz de um idioma
    else if (currentPath === "/pt" || currentPath === "/en") {
      navigate(`/${newLang}`);
    }
    // Caso contrário, redireciona para a página inicial do novo idioma
    else {
      navigate(`/${newLang}`);
    }
  };

  return (
    <button
      onClick={switchLanguage}
      className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors"
      aria-label={
        currentLang === "pt" ? "Switch to English" : "Mudar para Português"
      }
    >
      <Globe size={16} />
      <span>{currentLang === "pt" ? "EN" : "PT"}</span>
    </button>
  );
};

export default LanguageSwitcher;
