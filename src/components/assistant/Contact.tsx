"use client";
import { motion } from "framer-motion";
import {
  RiMailLine,
  RiLinkedinBoxLine,
  RiGithubLine,
  RiFileTextLine,
} from "@remixicon/react";

export function Contact() {
  const contactMethods = [
    {
      icon: RiMailLine,
      label: "Email",
      value: "kamuyu.will@gmail.com",
      href: "mailto:kamuyu.will@gmail.com",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      hoverBg: "hover:bg-blue-500/20",
    },
    {
      icon: RiLinkedinBoxLine,
      label: "LinkedIn",
      value: "/in/william-kamau-7b47a572",
      href: "https://www.linkedin.com/in/william-kamau-7b47a572",
      color: "text-blue-500",
      bgColor: "bg-blue-600/10",
      hoverBg: "hover:bg-blue-600/20",
    },
    {
      icon: RiGithubLine,
      label: "GitHub",
      value: "@willikay11",
      href: "https://github.com/willikay11",
      color: "text-neutral-300",
      bgColor: "bg-neutral-700/10",
      hoverBg: "hover:bg-neutral-700/20",
    },
    {
      icon: RiFileTextLine,
      label: "Resume",
      value: "Download CV",
      href: "/resume/William%20Kamau%20Resume.pdf",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      hoverBg: "hover:bg-green-500/20",
    },
  ];

  return (
    <div className="w-full max-w-2xl">
      <div className="bg-neutral-800/90 backdrop-blur-sm rounded-2xl px-4 sm:px-6 py-5 sm:py-6 shadow-lg border border-neutral-700/50">
        <h3 className="text-lg sm:text-xl font-semibold text-neutral-100 mb-3 sm:mb-4">
          Let's Connect
        </h3>
        <p className="text-sm sm:text-base text-neutral-300 mb-5 sm:mb-6 leading-relaxed">
          I'm always open to discussing new projects, opportunities, or just
          having a chat about technology. Feel free to reach out through any of
          the channels below:
        </p>

        <div className="space-y-2.5 sm:space-y-3">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label !== "Email" ? "_blank" : undefined}
                rel={
                  method.label !== "Email" ? "noopener noreferrer" : undefined
                }
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl ${method.bgColor} ${method.hoverBg} border border-neutral-700/30 transition-all duration-200 group`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${method.color} bg-neutral-900/50 flex-shrink-0`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm font-medium text-neutral-400">
                    {method.label}
                  </div>
                  <div
                    className={`text-sm sm:text-base font-medium ${method.color} group-hover:underline truncate`}
                  >
                    {method.value}
                  </div>
                </div>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-500 group-hover:text-neutral-300 transition-colors flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-neutral-700/50">
          <p className="text-xs sm:text-sm text-neutral-400 text-center">
            Looking forward to hearing from you! 👋
          </p>
        </div>
      </div>
    </div>
  );
}
