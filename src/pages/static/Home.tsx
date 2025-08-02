import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, VideoIcon, FileText, Bot, Film, Download } from "lucide-react";
import { motion } from "motion/react"

const steps = [
	{
		icon: <FileText className="w-8 h-8 text-blue-600" />,
		title: "1. Enter Topic or Script",
		desc: "Start by entering a topic or your own script. Our AI can generate a script for you if you provide just a topic.",
	},
	{
		icon: <Bot className="w-8 h-8 text-purple-600" />,
		title: "2. AI Script Generation",
		desc: "If you choose, our AI will instantly generate a creative and relevant script based on your topic.",
	},
	{
		icon: <Film className="w-8 h-8 text-indigo-600" />,
		title: "3. Video Creation",
		desc: "We convert your script into a video using advanced text-to-speech and video synthesis technologies.",
	},
	{
		icon: <Download className="w-8 h-8 text-green-600" />,
		title: "4. Download & Share",
		desc: "Preview your video, download it, and share it anywhere you like!",
	},
];

const Home = () => {
	const navigate = useNavigate();

	const handleGetStarted = () => {
		navigate("/form");
	};

	return (
		<main className="min-h-screen w-full bg-[#0A0A0A] flex flex-col items-center pt-24 pb-16 px-4">
			{/* Hero Section */}
			<section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
				<motion.div 
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, type: "spring" }}
					className="flex-1 flex flex-col items-start"
				>
					<motion.span
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#333333] rounded-full px-4 py-2 mb-4 shadow-lg bg-gradient-to-tr from-indigo-500 to-purple-600"
					>
						<motion.div
							animate={{ rotate: 360 }}
							transition={{ duration: 2, ease: "linear" }}
						>
							<VideoIcon className="h-7 w-7 text-white" />
						</motion.div>
						<span className="text-white font-semibold text-lg">
							AI Video Generator
						</span>
					</motion.span>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.7 }}
						className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6 leading-tight"
					>
						Instantly Turn{" "}
						<motion.span
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.8, duration: 0.5 }}
							className="text-indigo-400 inline-block"
						>
							Text
						</motion.span>{" "}
						Into{" "}
						<motion.span
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 1, duration: 0.5 }}
							className="text-purple-400 inline-block"
						>
							Engaging Videos
						</motion.span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.2, duration: 0.7 }}
						className="text-lg text-zinc-400 mb-8 max-w-xl"
					>
						Enter your topic or script and let our AI do the magic. Create
						professional videos in seconds—no editing skills required!
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.4, duration: 0.5 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Button
							size="lg"
							className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg px-8 py-3 rounded-xl shadow-lg shadow-purple-500/20 hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center gap-2"
							onClick={handleGetStarted}
						>
							<motion.div
								animate={{ rotate: [0, 15, -15, 0] }}
								transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
							>
								<Sparkles className="h-5 w-5" />
							</motion.div>
							Get Started
						</Button>
					</motion.div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
					className="flex-1 flex justify-center items-center"
				>
					<motion.div
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.7, duration: 0.5 }}
						className="relative"
						whileHover={{ scale: 1.02 }}
					>
						<motion.img
							src="/hero-video-preview.png"
							alt="Video Preview"
							className="w-[350px] md:w-[420px] rounded-2xl shadow-2xl border-4 border-white/60"
							animate={{ boxShadow: ["0px 0px 20px rgba(99, 102, 241, 0.2)", "0px 0px 40px rgba(168, 85, 247, 0.3)", "0px 0px 20px rgba(99, 102, 241, 0.2)"] }}
							transition={{ duration: 3, repeat: Infinity }}
						/>
						<motion.span
							initial={{ scale: 0, rotate: -180 }}
							animate={{ scale: 1, rotate: 0 }}
							transition={{ delay: 1, type: "spring", stiffness: 200 }}
							className="absolute -top-6 -left-6 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full p-4 shadow-lg"
						>
							<VideoIcon className="h-8 w-8 text-white" />
						</motion.span>
					</motion.div>
				</motion.div>
			</section>

			{/* How It Works Section */}
		<section className="w-full max-w-6xl mt-4">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
				className="text-3xl md:text-4xl font-bold text-center text-white mb-14"
			>
				How Does {" "}
				<motion.span
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block"
				>
					Lumosify
				</motion.span> Work?
			</motion.h2>
			<div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
				{steps.map((step, idx) => (
					<motion.div
						key={idx}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: idx * 0.2, duration: 0.5 }}
						className="relative flex-1 flex flex-col items-center min-w-[200px]"
					>
						{/* Connector line */}
						{idx !== steps.length - 1 && (
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ delay: (idx + 1) * 0.3, duration: 0.7 }}
								className="hidden md:block absolute top-1/2 right-0 w-full h-1 z-0"
							>
								<div className="h-1 w-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-purple-500/20"></div>
							</motion.div>
						)}
						<motion.div
							whileHover={{ y: -5 }}
							className="group relative z-10 bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col items-center px-7 py-10 rounded-2xl"
						>
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.2 + 0.3, type: "spring", stiffness: 200 }}
								className="absolute -top-8 left-1/2 -translate-x-1/2 transform"
							>
								<motion.div
									whileHover={{ scale: 1.1, rotate: 360 }}
									transition={{ duration: 0.3 }}
									className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20 border-4 border-slate-950"
								>
									{step.icon}
								</motion.div>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.2 + 0.5, duration: 0.5 }}
								className="mt-10 text-center"
							>
								<div className="text-lg font-bold text-white mb-2">{step.title}</div>
								<p className="text-zinc-400 text-base">{step.desc}</p>
							</motion.div>
						</motion.div>
					</motion.div>
				))}
			</div>
		</section>
		</main>
	);
};

export default Home;