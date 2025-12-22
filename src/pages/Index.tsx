import { useState, useEffect } from "react";
import screenshot from "@/assets/screenshot.png";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
        <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">GeneSim</h1>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {["Home", "Features", "About"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:underline underline-offset-4 transition-all"
                >
                  {item}
                </button>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/genesim"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 bg-primary-foreground text-primary text-xs font-medium hover:opacity-90 transition-opacity"
              >
                View on GitHub
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-[90vh] flex flex-col items-center justify-center px-6 pt-16 pb-16 border-b-2 border-foreground"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 text-xs text-muted-foreground tracking-widest uppercase">
              [ Desktop Application ]
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Genetic Circuit
              <br />
              Simulator
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              A powerful desktop application for modeling and simulating gene regulatory networks with an intuitive visual interface.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="https://github.com/genesim"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-foreground text-background font-medium brutalist-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150"
              >
                View Repository →
              </a>
              <button
                onClick={() => scrollToSection("features")}
                className="px-8 py-3 border-2 border-foreground bg-background font-medium hover:bg-secondary transition-colors duration-150"
              >
                Learn More
              </button>
            </div>

            {/* Screenshot */}
            <div className="relative">
              <div className="brutalist-border brutalist-shadow-lg bg-card p-2 md:p-4">
                <img
                  src={screenshot}
                  alt="GeneSim Simulator Interface showing gene regulatory network visualization and simulation results"
                  className="w-full border border-muted"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 text-xs font-bold brutalist-border">
                v1.0
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-6 border-b-2 border-foreground">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-xs text-muted-foreground tracking-widest uppercase mb-4">
                [ Capabilities ]
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Key Features</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Visual Network Editor",
                  description:
                    "Drag and drop interface for creating gene regulatory networks with genes, inducers, and reporters.",
                },
                {
                  title: "Real-time Simulation",
                  description:
                    "Live simulation with deterministic and stochastic modes for accurate biological modeling.",
                },
                {
                  title: "Advanced Analysis",
                  description:
                    "Sensitivity analysis, bifurcation diagrams, and nullcline analysis for deep insights.",
                },
                {
                  title: "Multicellular Support",
                  description:
                    "Model complex multicellular systems with cell-to-cell communication and spatial dynamics.",
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="brutalist-border brutalist-shadow bg-card p-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-150"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <span className="text-muted-foreground">[{String(index + 1).padStart(2, "0")}]</span>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase mb-4">
                  [ About ]
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Open Source
                  <br />
                  Synthetic Biology
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  GeneSim is an open-source tool designed for researchers, students, and synthetic biologists to model and simulate genetic circuits with precision and ease.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Built with modern technologies, GeneSim provides a fast and responsive experience for designing complex biological systems.
                </p>
              </div>

              <div className="space-y-4">
                <div className="brutalist-border p-4 bg-card">
                  <div className="text-xs text-muted-foreground mb-1">License</div>
                  <div className="font-bold">MIT Open Source</div>
                </div>
                <div className="brutalist-border p-4 bg-card">
                  <div className="text-xs text-muted-foreground mb-1">Repository</div>
                  <a
                    href="https://github.com/genesim"
                    className="font-bold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/genesim →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-foreground py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© 2024 GeneSim. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground hover:underline">
              Documentation
            </a>
            <a href="https://github.com/genesim" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
