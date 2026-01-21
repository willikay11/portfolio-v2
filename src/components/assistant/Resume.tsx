"use client";
import { motion } from "framer-motion";
import {
  RiBriefcaseLine,
  RiGraduationCapLine,
  RiAwardLine,
  RiDownloadLine,
} from "@remixicon/react";

export function Resume() {
  const experience = [
    {
      title: "Lead Software Engineer",
      company: "Gapstack Limited",
      period: "2020 - Present",
      description: "Leading engineering teams and architecting scalable systems",
      highlights: [
        "Led development of multiple high-impact projects",
        "Mentored junior engineers and established best practices",
        "Drove technical decisions aligning with business goals",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University",
      period: "2015 - 2019",
    },
  ];

  const achievements = [
    "Built scalable systems serving thousands of users",
    "Reduced system response time by 40% through optimization",
    "Successfully delivered 10+ production-ready projects",
  ];

  return (
    <div className="w-full max-w-4xl">
      <div className="bg-neutral-800/90 backdrop-blur-sm rounded-2xl px-4 sm:px-6 py-5 sm:py-6 shadow-lg border border-neutral-700/50">
        <div className="flex items-center justify-between mb-5 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-neutral-100">
            Resume
          </h3>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-sm sm:text-base"
          >
            <RiDownloadLine className="w-4 h-4 sm:w-5 sm:h-5" />
            Download PDF
          </a>
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <RiBriefcaseLine className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            <h4 className="text-base sm:text-lg font-semibold text-neutral-100">
              Experience
            </h4>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-neutral-900/50 rounded-xl p-4 sm:p-5 border border-neutral-700/30"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h5 className="text-base sm:text-lg font-semibold text-neutral-100">
                      {exp.title}
                    </h5>
                    <p className="text-sm sm:text-base text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-400">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-neutral-300 mb-3">
                  {exp.description}
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-neutral-400 flex items-start gap-2"
                    >
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <RiGraduationCapLine className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
            <h4 className="text-base sm:text-lg font-semibold text-neutral-100">
              Education
            </h4>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="bg-neutral-900/50 rounded-xl p-4 sm:p-5 border border-neutral-700/30"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h5 className="text-base sm:text-lg font-semibold text-neutral-100">
                      {edu.degree}
                    </h5>
                    <p className="text-sm sm:text-base text-green-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-400">
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <RiAwardLine className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
            <h4 className="text-base sm:text-lg font-semibold text-neutral-100">
              Key Achievements
            </h4>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="bg-neutral-900/50 rounded-xl p-3 sm:p-4 border border-neutral-700/30 flex items-start gap-3"
              >
                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-purple-500/10 flex-shrink-0 mt-0.5">
                  <RiAwardLine className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                </div>
                <p className="text-sm sm:text-base text-neutral-300">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
