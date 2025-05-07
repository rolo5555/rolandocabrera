import { Switch, Route, Router } from "wouter";
import { useState, useEffect } from "react";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// Use hash-based routing for GitHub Pages compatibility
const useHashLocation = () => {
  const [location, setLocation] = useState(
    window.location.hash ? window.location.hash.replace("#", "") : "/"
  );

  useEffect(() => {
    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash ? window.location.hash.replace("#", "") : "/";
      setLocation(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Hash-based navigation function
  const navigate = (to: string) => {
    window.location.hash = to;
  };

  return [location, navigate] as [string, (to: string) => void];
};

function App() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
