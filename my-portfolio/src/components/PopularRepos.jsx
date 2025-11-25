import React, { useEffect, useState } from "react";
import { FaStar, FaCodeBranch } from "react-icons/fa";

const PopularRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getRepos() {
      try {
        const res = await fetch("https://api.github.com/users/im-lakshyaa/repos");
        const data = await res.json();

        // Sort by most starred + filter out forks
        const top = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        setRepos(top);
      } catch (error) {
        console.log("Error fetching repos:", error);
      }
    }

    getRepos();
  }, []);

  return (
    <div className="mt-8 bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
      <h2 className="text-lg font-semibold text-white mb-5">Popular Repositories</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="border border-[#30363d] bg-[#161b22] p-4 rounded-md hover:border-gray-400 transition"
          >
            {/* Repo Name */}
            <h3 className="text-white font-semibold text-md">{repo.name}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mt-1 mb-3">
              {repo.description || "No description available."}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between text-sm text-gray-400">

              {/* Language Color */}
              <span className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: repo.language ? "#f1e05a" : "#555" }}
                ></span>
                {repo.language || "Unknown"}
              </span>

              {/* Stars & Forks */}
              <span className="flex items-center gap-4">

                <span className="flex items-center gap-1">
                  <FaStar /> {repo.stargazers_count}
                </span>

                <span className="flex items-center gap-1">
                  <FaCodeBranch /> {repo.forks_count}
                </span>

              </span>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRepos;
