import JulieImg from "../assets/Julie.jpg";
import HeidiImg from "../assets/Heidi.jpg";
import JenniferImg from "../assets/Jennifer.jpg";
import CharImg from "../assets/char.jpg";
import DeanImg from "../assets/Dean.jpg";

// Array of team member objects
const teamMembers = [
  {
    name: "Julie Ihlenfeldt",
    title: "Program Director",
    image: JulieImg,
    bio: "Julie graduated from the University of Wisconsin-Green Bay with a degree in Human Services. Julie has over 25 years experience working within the social services arena of developmental disabilities field assisting special needs individuals."
  },
  {
    name: "Heidi Basford Kerkhof",
    title: "Program Director",
    image: HeidiImg,
    bio: "Heidi has a Bachelor of Science in Psychology from University of Wisconsin-Oshkosh. Heidi has been serving individuals with Traumatic Brain Injury, Developmental Disabilities, Physical Limitations and Mental Illness for over 25 years in Outagamie and Winnebago Counties. Heidi has served on the board of the National Alliance on Mental Illness in Oshkosh (NAMI), Committree on Aging (a sub committee of the Oshkosh Common Council) and is an active member of Outagamie and Winnebago County Elder Abuse CCR."
  },
  {
    name: "Jennifer Bucher",
    title: "Lead Financial Care Manager",
    image: JenniferImg,
    bio: "Jennifer graduated from University of Wisconsin-Green Bay with a bachelor degree in Human Development. Jennifer has worked with disabled individuals for 15 years"
  },
  {
    name: "Sherri Banker",
    title: "Guardianship Care Manager",
    image: CharImg,
    bio: "Sherri has been working with adults with disabilities and the elderly since 1985. Sherri's passion is helping people make their day better. Sherri enjoys helping people work to their highest potential."
  },
  {
    name: "Dean Ihlenfeldt",
    title: "Guardianship Care Manager",
    image: DeanImg,
    bio: "Dean graduated from the University of Wisconsin- Eau Claire with a degree in Business, and have over 25 years of experience working with individuals with disabilities. I am passionate about creating an inclusive environment where everyone feels comfortable and receives the assistance they need."
  }
];

export function TeamPage() {
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

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1
            className="text-white mb-6"
            style={{
              fontSize: "4rem",
              fontWeight: 200,
              letterSpacing: "0.02em",
            }}
          >
            Meet Our Team
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p
            className="text-slate-300 max-w-3xl mx-auto"
            style={{ fontSize: "1.25rem", fontWeight: 300, lineHeight: "2rem" }}
          >
            Dedicated professionals committed to providing exceptional
            guardianship services
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 shadow-2xl hover:border-slate-600/70 transition-all duration-300 hover:scale-105 flex flex-col items-center text-center"
            >
              {/* Circular Photo */}
              <div className="mb-6 relative">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gradient-to-br from-blue-500 to-purple-500 shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3
                className="text-white mb-2"
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 300,
                  letterSpacing: "0.01em",
                }}
              >
                {member.name}
              </h3>

              {/* Title */}
              <p
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-5"
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                {member.title}
              </p>

              {/* Bio */}
              <p
                className="text-slate-300"
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 300,
                  lineHeight: "1.75rem",
                }}
              >
                {member.bio}
              </p>
            </div>
          ))}
        </div>
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
