import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaLink, FaUserFriends } from "react-icons/fa";

const Sidebar = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://api.github.com/users/im-lakshyaa");
        if (!res.ok) throw new Error("something went wrong");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) return <div className="w-full md:w-72 bg-[#0d1117] p-5 text-gray-500">Loading GitHub data...</div>;

  return (
    <aside className="w-full md:w-72 bg-[#0d1117] text-[#c9d1d9] md:px-6 px-4 py-6 md:border-r border-[#30363d] md:min-h-screen font-sans flex flex-col gap-4">
      
      {/* --- AVATAR SECTION --- */}
      <div className="flex md:flex-col items-center md:items-start gap-4">
        {/* Avatar Image */}
        <div className="relative group">
            <img
            src={user?.avatar_url}
            alt="profile"
            className="w-20 h-20 md:w-[260px] md:h-[260px] rounded-full border border-[#30363d] shadow-sm z-10"
            />
            {/* Status Icon (Desktop only visual) */}
            <div className="hidden md:flex absolute bottom-8 right-4 bg-[#0d1117] border border-[#30363d] rounded-full p-2 text-lg shadow-md">
                🎯
            </div>
        </div>

        {/* Names */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-[#c9d1d9] leading-tight">{user?.name || "Lakshya"}</h2>
          <p className="text-xl font-light text-[#8b949e]">@{user?.login}</p>
        </div>
      </div>

      {/* --- BIO --- */}
      <div className="text-[16px] text-[#c9d1d9] leading-snug">
        {user?.bio || "Full Stack Developer | React & Node Enthusiast"}
      </div>

      {/* --- ACTION BUTTON --- */}
      <button className="w-full bg-[#21262d] text-[#c9d1d9] border border-[#30363d] rounded-md py-1.5 font-medium text-sm hover:bg-[#30363d] hover:text-white transition-colors hover:border-[#8b949e]">
        Edit profile
      </button>

      {/* --- FOLLOWERS COUNT --- */}
      <div className="flex items-center gap-1 text-sm text-[#8b949e] mb-2">
        <FaUserFriends className="text-[#8b949e]" />
        <span className="font-bold text-[#c9d1d9] hover:text-[#58a6ff] cursor-pointer">{user?.followers}</span> followers
        <span>·</span>
        <span className="font-bold text-[#c9d1d9] hover:text-[#58a6ff] cursor-pointer">{user?.following}</span> following
      </div>

      {/* --- CONTACT / METADATA --- */}
      <div className="flex flex-col gap-2 text-sm text-[#c9d1d9]">
        
        {/* Location (if available) */}
        {user?.location && (
             <div className="flex items-center gap-2 text-[#c9d1d9]">
                <FaMapMarkerAlt className="text-[#8b949e] w-4" />
                <span>{user.location}</span>
            </div>
        )}

        {/* Email */}
        <a href="mailto:lakshya@gmail.com" className="flex items-center gap-2 hover:text-[#58a6ff] truncate">
          <FaEnvelope className="text-[#8b949e] w-4" />
          <span>lakshya@gmail.com</span>
        </a>

        {/* Website / Blog */}
        <a href={user?.blog || "#"} target="_blank" className="flex items-center gap-2 hover:text-[#58a6ff] truncate">
          <FaLink className="text-[#8b949e] w-4" />
          <span>{user?.blog || "lakshya.dev"}</span>
        </a>
        
        {/* LinkedIn */}
        <a href="#" className="flex items-center gap-2 hover:text-[#58a6ff]">
            <FaLinkedin className="text-[#8b949e] w-4" />
            <span>in/lakshya</span>
        </a>
      </div>

      <div className="border-t border-[#30363d] my-2"></div>

      {/* --- SKILLS (Styled as GitHub Topics) --- */}
      <div>
        <h3 className="text-base font-semibold text-[#c9d1d9] mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {/* Skill Tags - Blue Topic Style */}
          {["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Tailwind"].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-[#388bfd26] text-[#58a6ff] text-xs font-medium rounded-full hover:bg-[#388bfd40] cursor-pointer transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* --- ACHIEVEMENTS (Optional Visual Flair) --- */}
      <div className="mt-2">
         <h3 className="text-base font-semibold text-[#c9d1d9] mb-3">Achievements</h3>
         <div className="flex gap-2">
            <img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" className="w-16 h-16" alt="shark" />
            <img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" className="w-16 h-16" alt="yolo" />
         </div>
      </div>

    </aside>
  );
};

export default Sidebar;