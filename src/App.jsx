import Hero from "./components/Hero.jsx";
import Navbar from "./components/navbar.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  return (
    <div className="relative overflow-x-hidden text-neutral-900 dark:text-neutral-300 antialiased selection:bg-cyan-300 dark:selection:bg-cyan-900 selection:text-cyan-900 dark:selection:text-cyan-300 min-h-screen bg-neutral-100 dark:bg-neutral-950">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute inset-0 -z-10 bg-neutral-100 dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,1),rgba(120,119,198,0.3))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,0))]"></div>

      <div className="relative container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
