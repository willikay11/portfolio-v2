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
      period: "Aug 2020 - Present",
      description: "Leading engineering excellence and driving platform innovation for scalable software solutions",
      highlights: [
        "Successfully led a team of 4 engineers to deliver multiple high-impact platforms on time and within budget",
        "Architected and implemented scalable, API-centric infrastructure serving thousands of users",
        "Collaborated with cross-functional stakeholders to resolve critical technical roadblocks, improving delivery velocity by 40%",
        "Designed and developed maintainable React-based user interfaces with robust backend architecture",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "BRCK",
      period: "Nov 2019 - Jun 2020",
      description: "Delivered exceptional user experiences through innovative frontend solutions",
      highlights: [
        "Developed responsive React and Angular components, improving user engagement across multiple device types",
        "Translated complex UX/business requirements into elegant, maintainable code solutions",
        "Collaborated closely with UX/UI designers to ensure pixel-perfect implementation and seamless user experience",
        "Optimized web application performance, reducing load times and enhancing user satisfaction",
      ],
    },
    {
      title: "Frontend Engineer", 
      company: "Ajua",
      period: "Nov 2018 - Nov 2019",
      description: "Built high-performance, responsive web applications for diverse user needs",
      highlights: [
        "Implemented responsive interfaces optimized for various screen sizes, ensuring consistent user experience",
        "Collaborated with product teams to transform requirements into actionable development plans",
        "Enhanced platform performance through strategic optimization techniques, reducing page load times by 30%",
        "Worked with QA teams to maintain high quality standards and deliver bug-free solutions",
      ],
    },
    {
      title: "Software Engineer",
      company: "Cytonn Investments", 
      period: "Aug 2016 - Nov 2018",
      description: "Developed scalable software solutions for financial services and internal operations",
      highlights: [
        "Built company website and internal CRM platform, streamlining business operations",
        "Collaborated with development and testing teams to deliver robust solutions meeting client requirements",
        "Designed solutions for functionality, scalability, and performance in the financial technology sector",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Informatics",
      institution: "Strathmore University",
      period: "Nairobi, Kenya",
    },
  ];

  const achievements = [
    "Led engineering teams to deliver 10+ production-ready platforms serving thousands of users",
    "Improved platform performance by 40% through strategic architecture decisions and optimization",
    "Successfully managed complex technical projects from conception to deployment",
    "Mentored and developed junior engineers, fostering technical excellence and career growth",
    "Established development best practices and quality standards across multiple organizations",
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
