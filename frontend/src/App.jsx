import {Home, Users, Phone, UserCircle, Menu, X, ChevronRight,} from "lucide-react";
import { useState } from "react";
import { AboutPage } from "./pages/AboutPage.jsx";
import { TeamPage } from "./pages/TeamPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import CompanyLogo from "./assets/CompanyLogo.png";

export default function App() {
  const [activeNav, setActiveNav] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full min-h-screen flex bg-black overflow-hidden relative">
      {/* Starfield background */}
      <div className="absolute inset-0 bg-black">
        {/* Stars */}
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 0.5 + "px",
              height: Math.random() * 2 + 0.5 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${
                Math.random() * 5 + 3
              }s infinite ease-in-out`,
              animationDelay: Math.random() * 5 + "s",
            }}
          />
        ))}
      </div>

      {/* Toggle button - Always visible with label */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-6 left-6 z-50 flex items-center gap-3 px-5 py-3 rounded-lg bg-black/80 border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300 shadow-lg shadow-purple-500/20 backdrop-blur-sm group"
      >
        {sidebarOpen ? (
          <>
            <X className="size-6" />
            <span className="tracking-wider">Close Menu</span>
          </>
        ) : (
          <>
            <Menu className="size-6" />
            <span className="tracking-wider">Open Menu</span>
          </>
        )}
      </button>

      {/* Sidebar - Slides in from left */}
      <div
        className={`fixed top-0 left-0 h-full bg-black/95 border-r border-purple-600/50 flex flex-col z-40 transition-transform duration-500 ease-in-out backdrop-blur-md ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "320px" }}
      >
        {/* Logo Section */}
        <div className="p-8 pt-24 border-b border-purple-600/50">
          <div className="flex flex-col items-center text-center">
            {/* Company Logo */}
            <img
              src={CompanyLogo}
              alt="Company Logo"
              className="w-24 h-24 object-contain mb-4 drop-shadow-[0_0_12px_rgba(255,223,0,0.35)]"
            />

            {/* Company Name */}
            <div className="text-white-300 text-2xl tracking-widest mb-2">
              GUARDIANS OF
            </div>
            <div className="text-white-400 text-3xl tracking-widest mb-1">
              TOMORROW
            </div>

            {/* Divider */}
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-3 overflow-y-auto">
          <div className="text-purple-600/60 text-xs tracking-widest mb-4 px-2">
            NAVIGATION
          </div>
          {[
            {
              id: "home",
              icon: Home,
              label: "Home",
              description: "Main landing",
            },
            {
              id: "about",
              icon: UserCircle,
              label: "About Us",
              description: "Our story",
            },
            {
              id: "team",
              icon: Users,
              label: "Meet The Team",
              description: "Our guardians",
            },
            {
              id: "contact",
              icon: Phone,
              label: "Contact Us",
              description: "Get in touch",
            },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveNav(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-lg transition-all duration-300 group ${
                activeNav === item.id
                  ? "bg-purple-500/20 text-purple-400 border border-purple-500/50 shadow-lg shadow-purple-500/20"
                  : "text-gray-400 hover:bg-purple-500/5 hover:text-purple-300 border border-purple-600/20 hover:border-purple-500/30"
              }`}
            >
              <item.icon className="size-6 flex-shrink-0" />
              <div className="flex-1 text-left">
                <div className="tracking-wide">{item.label}</div>
                <div className="text-xs text-purple-600/60 group-hover:text-purple-500/60 transition-colors">
                  {item.description}
                </div>
              </div>
              <ChevronRight
                className={`size-4 transition-all ${
                  activeNav === item.id
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-50"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-purple-600/50 space-y-4">
          <div className="text-center text-purple-600/40 text-xs tracking-wider">
            Serving Wisconsin Since 1970s
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 backdrop-blur-sm transition-opacity duration-500"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div
        className={`relative flex-1 flex perspective-container ${
          activeNav === "about" ||
          activeNav === "team" ||
          activeNav === "contact"
            ? "overflow-auto items-start"
            : "overflow-hidden items-center justify-center"
        }`}
      >
        {activeNav === "home" ? (
          <>
            {/* Opening crawl */}
            <div className="absolute inset-0 flex items-end justify-center pb-0 overflow-hidden">
              <div className="crawl-container">
                <div className="crawl text-white text-center">
                  <div className="crawl-text">
                    <p>
                      In a city long, long ago,
                      <br />
                      there developed a Corporate
                      <br />
                      Guardianship...
                    </p>

                    <p className="crawl-heading">
                      GUARDIANS OF
                      <br />
                      TOMORROW, INC.
                    </p>

                    <p>
                      For over 50 years combined,
                      <br />
                      this organization has dedicated
                      <br />
                      itself to helping people reach
                      <br />
                      their fullest potential across
                      <br />
                      the regions of Northeastern
                      <br />
                      Wisconsin.
                    </p>

                    <p>
                      Providing excellent service to
                      <br />
                      the counties of Outagamie,
                      <br />
                      Winnebago, Fond Du Lac,
                      <br />
                      Brown, Waupaca, Calumet,
                      <br />
                      and Green Lake.
                    </p>

                    <p>
                      Their mission: to be the
                      <br />
                      guardians who protect and
                      <br />
                      nurture the promise of
                      <br />
                      tomorrow, ensuring every
                      <br />
                      individual has the support
                      <br />
                      they need to thrive...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
          </>
        ) : activeNav === "about" ? (
          <AboutPage />
        ) : activeNav === "team" ? (
          <TeamPage />
        ) : activeNav === "contact" ? (
          <ContactPage />
        ) : activeNav === "members" ? (
          <TeamMembersPage />
        ) : null}
      </div>

      {/* Component-scoped styles */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .perspective-container {
          perspective: 400px;
          perspective-origin: 50% 100%;
        }

        .crawl-container {
          position: relative;
          transform-origin: 50% 100%;
          animation: crawl 60s linear infinite;
        }

        .crawl {
          transform: rotateX(25deg);
          transform-origin: 50% 100%;
        }

        @keyframes crawl {
          0% {
            transform: translateY(70vh) translateZ(0);
          }
          37.5% {
            transform: translateY(-20%) translateZ(-250px);
          }
          62.5% {
            transform: translateY(-20%) translateZ(-250px);
          }
          100% {
            transform: translateY(-200%) translateZ(-500px);
          }
        }
        }
      `}</style>
    </div>
  );
}
