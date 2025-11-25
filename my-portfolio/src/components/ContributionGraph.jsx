import React, { useEffect, useState } from "react";

const ContributionGraph = () => {
  const [weeks, setWeeks] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);

  // GitHub Color Palette (Dark Dimmed)
  // Level 0 (No activity) -> Level 4 (High activity)
  const colors = {
    0: "bg-[#161b22]",
    1: "bg-[#0e4429]",
    2: "bg-[#006d32]",
    3: "bg-[#26a641]",
    4: "bg-[#39d353]",
  };

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data from the public proxy
        const res = await fetch("https://github-contributions-api.jogruber.de/v4/im-lakshyaa?y=last");
        const json = await res.json();

        if (json.contributions) {
          // 1. Calculate Total
          const total = json.contributions.reduce((acc, curr) => acc + curr.count, 0);
          setTotalContributions(total);

          // 2. Process data into Weeks (Arrays of 7 days)
          // The API returns a flat array of 365 days. We need to chunk it.
          const days = json.contributions;
          const weekChunks = [];
          
          // We loop through the days and create chunks of 7
          // Note: This is a simple approximation. For perfect alignment with Sunday/Monday, 
          // we would check day.date, but this fits the visual grid perfectly.
          for (let i = 0; i < days.length; i += 7) {
            weekChunks.push(days.slice(i, i + 7));
          }
          setWeeks(weekChunks);
        }
      } catch (error) {
        console.error("Error fetching contributions:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-gray-500 mt-6 text-center text-sm">Loading contribution graph...</div>;
  }

  return (
    <div className="bg-[#0d1117] border border-[#30363d] rounded-md p-4 mt-6 w-full text-[#c9d1d9] flex flex-col items-center md:items-start">
      
      {/* Header */}
      <h2 className="text-base font-normal mb-4 text-[#c9d1d9] w-full text-left">
        {totalContributions} contributions in the last year
      </h2>

      {/* The Grid Container */}
      <div className="flex gap-[3px] overflow-x-auto pb-2 max-w-full">
        {weeks.map((week, wIndex) => (
          <div key={wIndex} className="flex flex-col gap-[3px]">
            {week.map((day, dIndex) => (
              <div
                key={dIndex}
                // Native tooltip with date and count
                title={`${day.count} contributions on ${day.date}`}
                // Dynamic class for color
                className={`w-[10px] h-[10px] rounded-[2px] ${colors[day.level]} hover:border hover:border-white/40 border border-transparent transition-all`}
              ></div>
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2 mt-2 text-xs text-[#7d8590] ml-auto">
        <span>Less</span>
        <div className={`w-[10px] h-[10px] rounded-[2px] ${colors[0]}`}></div>
        <div className={`w-[10px] h-[10px] rounded-[2px] ${colors[1]}`}></div>
        <div className={`w-[10px] h-[10px] rounded-[2px] ${colors[2]}`}></div>
        <div className={`w-[10px] h-[10px] rounded-[2px] ${colors[3]}`}></div>
        <div className={`w-[10px] h-[10px] rounded-[2px] ${colors[4]}`}></div>
        <span>More</span>
      </div>

    </div>
  );
};

export default ContributionGraph;