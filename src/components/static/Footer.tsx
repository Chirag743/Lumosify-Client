import { Github } from "lucide-react";
import { motion } from "motion/react"

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#0A0A0A] backdrop-blur-xl border-t border-white/10 py-4 shadow-2xl"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center gap-2 text-zinc-400 text-sm"
        >
          <motion.span whileHover={{ scale: 1.02 }}>
            &copy; {new Date().getFullYear()}{" "}
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              Lumosify
            </motion.span>
          </motion.span>
          <span className="hidden md:inline">&middot;</span>
          <motion.span whileHover={{ scale: 1.02 }}>
            Powered by{" "}
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="font-semibold text-purple-400"
            >
              AI
            </motion.span>
          </motion.span>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/yourusername/Lumosify"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-zinc-400 hover:text-purple-400 transition"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Github className="w-5 h-5" />
          </motion.div>
          <span className="text-sm font-medium">GitHub</span>
        </motion.a>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;