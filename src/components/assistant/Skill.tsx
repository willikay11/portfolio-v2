"use client";
import { motion } from "framer-motion";
import {
  RiReactjsLine,
  RiDatabase2Line,
  RiServerLine,
  RiCodeSSlashLine,
  RiLayout4Line,
  RiSmartphoneLine,
} from "@remixicon/react";

type SkillCategory = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  skills: string[];
};

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: RiReactjsLine,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      skills: ["React"],
    },
    {
      title: "Mobile",
      icon: RiSmartphoneLine,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      skills: ["React Native"],
    },
    {
      title: "Backend",
      icon: RiServerLine,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      skills: ["Go", "Python", "Kafka"],
    },
    {
      title: "Databases",
      icon: RiDatabase2Line,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
    },
    {
      title: "Infrastructure",
      icon: RiCodeSSlashLine,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      skills: ["Docker", "Kubernetes", "Redis Pub-Sub"],
    },
    {
      title: "Architecture",
      icon: RiLayout4Line,
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      skills: ["System Design"],
    },
  ];

  return (
    <div className="w-full max-w-4xl">
      <div className="bg-neutral-800/90 backdrop-blur-sm rounded-2xl px-4 sm:px-6 py-5 sm:py-6 shadow-lg border border-neutral-700/50">
        <h3 className="text-lg sm:text-xl font-semibold text-neutral-100 mb-3 sm:mb-4">
          Technical Skills
        </h3>
        <p className="text-sm sm:text-base text-neutral-300 mb-5 sm:mb-6 leading-relaxed">
          I work with a diverse set of technologies across the full stack, from
          building responsive frontends to designing scalable distributed
          systems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className={`${category.bgColor} rounded-xl p-4 sm:p-5 border border-neutral-700/30`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                  <div
                    className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg ${category.color} bg-neutral-900/50`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h4
                    className={`text-base sm:text-lg font-semibold ${category.color}`}
                  >
                    {category.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-neutral-900/50 rounded-lg text-xs sm:text-sm font-medium text-neutral-200 border border-neutral-700/30"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-neutral-700/50">
          <p className="text-xs sm:text-sm text-neutral-400 text-center">
            I'm always learning and exploring new technologies to solve complex
            problems.
          </p>
        </div>
      </div>
    </div>
  );
}
