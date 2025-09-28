import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { ArrowRight, BarChart, Code, Database, Monitor } from "lucide-react";
import Button from "./components/Button";
import { FaGithub } from "react-icons/fa";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const pageBg = darkMode ? "bg-black text-white" : "bg-white text-black";
  const cardBg = darkMode ? "bg-gray-800" : "bg-gray-200";
  const textGray = darkMode ? "text-gray-400" : "text-gray-600";
  const titleGray = darkMode ? "text-gray-300" : "text-gray-800";

  return (
    <div className={`min-h-screen w-screen flex flex-col ${pageBg} transition-colors duration-500`}>
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 md:px-20 py-2 md:py-12 mt-10">
        <div className="flex flex-col justify-start space-y-2 md:pl-40">
          <h2 className={`text-lg font-semibold flex items-center gap-2 pt-10 md:pt-1 ${titleGray}`}>
            About Me
          </h2>
          <div className="text-4xl md:pb-3">
            Hi, I'm <span className="text-blue-400 font-bold">Vishal</span>
          </div>
          <ul className={`flex flex-col space-y-2 text-sm pt-3 ${textGray}`}>
            <li className="flex items-center gap-2">
              <BarChart className="w-4 h-4 text-blue-400" /> Data Analytics
            </li>
            <li className="flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-400" /> Web Development (React, Vue, Django)
            </li>
            <li className="flex items-center gap-2">
              <Database className="w-4 h-4 text-blue-400" /> Python & SQL Programming
            </li>
            <li className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-blue-400" /> UI/UX Design Basics
            </li>
          </ul>

          <div className="pt-4 flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="primary"
              darkMode={darkMode}
              icon={<FaGithub />}
              iconPosition="left"
              onClick={() => window.open("https://github.com/your-username", "_blank")}
            >
              GitHub
            </Button>

            <Button
              size="sm"
              variant="secondary"
              darkMode={darkMode}
              onClick={() => window.open("/VISHAL YADAV RESUME.pdf", "_blank")}
            >
              Download Resume
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-start space-y-4">
          <h2 className={`text-lg font-semibold flex items-center gap-2 ${titleGray}`}>
            Key Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {["JavaScript","React","CSS","Python","Tailwind","HTML","SQL","Power BI","Tableau","Metabase"].map(skill => (
              <span key={skill} className={`px-4 py-1 rounded-md text-sm ${cardBg}`}>{skill}</span>
            ))}
          </div>

          <h2 className={`text-lg font-semibold flex items-center gap-2 mt-4 ${titleGray}`}>
            Services
          </h2>
          <ul className={`flex flex-col space-y-2 text-sm ${textGray}`}>
            {[
              "Full Stack Developer",
              "Front End Developer (React, Vue, Django)",
              "Back End Developer",
              "API Integration",
              "SQL Report And Dashboard",
              "AM Chart Dashboard"
            ].map(service => (
              <li key={service} className="flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-green-400" /> {service}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
