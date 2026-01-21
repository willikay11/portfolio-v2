"use client";
import { motion } from "framer-motion";
import {
  RiMapPinLine,
  RiBriefcaseLine,
  RiTeamLine,
  RiCodeSSlashLine,
  RiRocketLine,
  RiLightbulbLine,
} from "@remixicon/react";

export function Profile() {
  const highlights = [
    {
      icon: RiBriefcaseLine,
      label: "Lead Software Engineer",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: RiMapPinLine,
      label: "Nairobi, Kenya",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      icon: RiTeamLine,
      label: "Team Leadership",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: RiCodeSSlashLine,
      label: "Full Stack",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
    },
  ];

  const values = [
    {
      icon: RiRocketLine,
      title: "Innovation",
      description: "Building scalable systems that solve real problems",
    },
    {
      icon: RiLightbulbLine,
      title: "Growth",
      description: "Continuous learning and knowledge sharing",
    },
  ];

  return (
    <div className="w-full max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-neutral-800/90 backdrop-blur-sm rounded-2xl shadow-lg border border-neutral-700/50 overflow-hidden"
      >
        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 px-4 sm:px-6 py-6 sm:py-8 border-b border-neutral-700/50">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-2xl sm:text-3xl font-bold text-white">WK</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-neutral-800" />
            </motion.div>

            <div className="flex-1">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-xl sm:text-2xl font-bold text-neutral-100 mb-2"
              >
                William Kamau Kamuyu
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-4"
              >
                Technical leader specializing in building scalable systems and
                leading high-performing engineering teams at{" "}
                <span className="text-blue-400 font-medium">
                  Gapstack Limited
                </span>
                .
              </motion.p>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex flex-wrap gap-2 justify-center sm:justify-start"
              >
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <div
                      key={highlight.label}
                      className={`flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg ${highlight.bgColor} border border-neutral-700/30`}
                    >
                      <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${highlight.color}`} />
                      <span className="text-xs sm:text-sm font-medium text-neutral-200">
                        {highlight.label}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-4 sm:px-6 py-5 sm:py-6 space-y-5 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <h4 className="text-base sm:text-lg font-semibold text-neutral-100 mb-3">
              About Me
            </h4>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-4">
              I'm passionate about creating impactful software solutions through
              collaboration and innovation. With extensive experience in
              software development methodologies and architecture, I excel at
              managing complex projects and delivering high-quality results that
              drive business value.
            </p>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              My approach combines technical excellence with strong leadership,
              ensuring teams stay aligned, motivated, and focused on delivering
              exceptional software on time.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <h4 className="text-base sm:text-lg font-semibold text-neutral-100 mb-3">
              Core Values
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="flex gap-3 p-3 sm:p-4 bg-neutral-900/50 rounded-xl border border-neutral-700/30"
                  >
                    <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-neutral-800 text-cyan-400 flex-shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h5 className="text-sm sm:text-base font-semibold text-neutral-100 mb-1">
                        {value.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-neutral-400">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
