import React from "react";
import { FaEdit, FaBook } from "react-icons/fa";

const READMESection = () => {
  return (
    <div className="w-full">
      
      {/* --- REPOSITORY HEADER (The "lakshya / README.md" bar) --- */}
      <div className="flex justify-between items-center bg-[#0d1117] border border-[#30363d] rounded-t-md px-4 py-2 mt-6 md:mt-0">
        <div className="text-xs text-[#c9d1d9] flex items-center gap-2 font-mono">
           <span>im-lakshyaa</span>
           <span>/</span>
           <span className="font-semibold">README.md</span>
        </div>
        <div className="text-[#c9d1d9] hover:text-[#58a6ff] cursor-pointer">
            <FaEdit />
        </div>
      </div>

      {/* --- README CONTENT AREA --- */}
      <div className="bg-[#0d1117] border-x border-b border-[#30363d] rounded-b-md p-6 md:p-10 text-[#c9d1d9]">
        
        {/* Intro */}
        <h1 className="text-3xl font-bold border-b border-[#30363d] pb-2 mb-6 text-white">
            Hi there <span className="animate-wave inline-block">👋</span>, I'm Lakshya
        </h1>

        <div className="text-[16px] leading-7 space-y-4">
          <p>
            I'm a passionate <strong>Full Stack Developer</strong> from India. I love building scalable web applications and exploring new technologies.
          </p>

          <ul className="list-disc list-inside space-y-1 text-[#c9d1d9]">
            <li>🔭 I’m currently working on <strong>E-Commerce Platform</strong></li>
            <li>🌱 I’m currently learning <strong>Next.js and GraphQL</strong></li>
            <li>👯 I’m looking to collaborate on <strong>Open Source projects</strong></li>
            <li>💬 Ask me about <strong>React, Node.js, and MongoDB</strong></li>
            <li>📫 How to reach me: <a href="#" className="text-[#58a6ff] hover:underline">lakshya@gmail.com</a></li>
          </ul>
        </div>

        {/* --- GITHUB STATS (Visual Flair) --- */}
        {/* Note: These are dynamic images often used in GitHub profiles. You can generate your own at github-readme-stats.vercel.app */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">
            <img 
                src="https://github-readme-stats.vercel.app/api?username=im-lakshyaa&show_icons=true&theme=dark_dimmed&hide_border=true&bg_color=0d1117" 
                alt="Lakshya's GitHub Stats"
                className="w-full md:w-1/2 border border-[#30363d] rounded-md"
            />
             <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=im-lakshyaa&layout=compact&theme=dark_dimmed&hide_border=true&bg_color=0d1117" 
                alt="Top Languages"
                className="w-full md:w-1/2 border border-[#30363d] rounded-md"
            />
        </div>

        {/* --- TECH ICONS --- */}
        <div className="mt-8">
            <h3 className="text-lg font-semibold text-white mb-3">Languages and Tools:</h3>
            <div className="flex flex-wrap gap-3 text-2xl text-gray-400">
                {/* Icons would go here, represented by simple text or icons for now */}
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="40" height="40" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" width="40" height="40" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="mongodb" width="40" height="40" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" width="40" height="40" />
            </div>
        </div>

      </div>
    </div>
  );
};

export default READMESection;