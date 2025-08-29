import React from "react";
import { motion } from "framer-motion";

export default function ProfileCard({
  name = "Raju Meena",
  title = "Frontend Developer",
  bio = "Building beautiful user interfaces & learning full-stack development.",
  avatarUrl = null,
  stats = [
    { label: "Followers", value: 1240 },
    { label: "Projects", value: 12 },
    { label: "Repos", value: 34 }
  ],
  onFollow = () => {},
  onMessage = () => {}
}) {
  const initials = name
    .split(" ")
    .map(n => n[0])
    .slice(0, 2)
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="max-w-sm mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:p-8"
    >
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-2xl font-semibold text-slate-700 dark:text-slate-200">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span>{initials}</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100 truncate">{name}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-300 mt-1 truncate">{title}</p>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 line-clamp-3">{bio}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        {stats.map((s, i) => (
          <div key={i} className="py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-700">
            <div className="text-sm text-slate-500 dark:text-slate-300">{s.label}</div>
            <div className="text-base md:text-lg font-medium text-slate-900 dark:text-slate-100">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={onFollow}
          className="flex-1 py-2 rounded-xl border border-transparent bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          Follow
        </button>

        <button
          onClick={onMessage}
          className="flex-1 py-2 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50"
        >
          Message
        </button>
      </div>

      <div className="mt-4 text-xs text-slate-400">Last active: <time dateTime={new Date().toISOString()}>Just now</time></div>
    </motion.div>
  );
}


