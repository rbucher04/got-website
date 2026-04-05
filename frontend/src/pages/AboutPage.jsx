export function AboutPage() {
  return (
    <div className="relative w-full min-h-screen overflow-auto bg-black">
      {/* Starfield background */}
      <div className="fixed inset-0 z-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: Math.random() * 3 + "s",
              animationDuration: Math.random() * 2 + 2 + "s",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-24">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <h1 className="text-white mb-6" style={{ fontSize: '4rem', fontWeight: 200, letterSpacing: '0.02em' }}>
            About Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-slate-300 max-w-3xl mx-auto" style={{ fontSize: '1.25rem', fontWeight: 300, lineHeight: '2rem' }}>
            Serving Wisconsin Since the 1970s
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-12 border border-slate-700/50 shadow-2xl">
            <h2 className="text-white mb-8" style={{ fontSize: '2.5rem', fontWeight: 300, letterSpacing: '0.02em' }}>
              Our Mission
            </h2>
            <p className="text-slate-200" style={{ fontSize: '1.375rem', fontWeight: 300, lineHeight: '2.25rem' }}>
              Provide superior guardianship services through open communication,
              honesty and respect for the individuals we serve.
            </p>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mb-20">
          <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-12 border border-slate-700/50 shadow-2xl">
            <h2 className="text-white mb-8" style={{ fontSize: '2.5rem', fontWeight: 300, letterSpacing: '0.02em' }}>
              What We Do
            </h2>
            <p className="text-slate-200 mb-8" style={{ fontSize: '1.125rem', fontWeight: 300, lineHeight: '2rem' }}>
              Guardians of Tomorrow, Inc. is a 501(c)(3) corporate guardianship agency designed to assist vulnerable
              individuals with decision making in health, living needs, and financial matters.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <h3 className="text-blue-400 mb-3" style={{ fontSize: '1.25rem', fontWeight: 400 }}>
                  Adults & Minors
                </h3>
                <p className="text-slate-300" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: '1.75rem' }}>
                  Comprehensive services for both adults and minors in need of guardianship support.
                </p>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <h3 className="text-purple-400 mb-3" style={{ fontSize: '1.25rem', fontWeight: 400 }}>
                  Guardian Services
                </h3>
                <p className="text-slate-300" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: '1.75rem' }}>
                  Services of the person and of the estate with dedicated professional care.
                </p>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <h3 className="text-blue-400 mb-3" style={{ fontSize: '1.25rem', fontWeight: 400 }}>
                  Legal Representation
                </h3>
                <p className="text-slate-300" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: '1.75rem' }}>
                  Power of attorney and conservatorship services for financial protection.
                </p>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <h3 className="text-purple-400 mb-3" style={{ fontSize: '1.25rem', fontWeight: 400 }}>
                  Representative Payee
                </h3>
                <p className="text-slate-300" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: '1.75rem' }}>
                  Professional management of benefits and financial matters with care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-white text-center mb-12" style={{ fontSize: '2.5rem', fontWeight: 300, letterSpacing: '0.02em' }}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white" style={{ fontSize: '2rem' }}>💬</span>
              </div>
              <h3 className="text-white mb-3" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                Communication
              </h3>
              <p className="text-slate-400" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: '1.75rem' }}>
                Open and transparent dialogue with all stakeholders
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white" style={{ fontSize: '2rem' }}>🤝</span>
              </div>
              <h3 className="text-white mb-3" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                Honesty
              </h3>
              <p className="text-slate-400" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: '1.75rem' }}>
                Integrity in every action and decision we make
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white" style={{ fontSize: '2rem' }}>❤️</span>
              </div>
              <h3 className="text-white mb-3" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                Respect
              </h3>
              <p className="text-slate-400" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: '1.75rem' }}>
                Dignity and compassion for those we serve
              </p>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}