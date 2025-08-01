import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, VideoIcon, FileText, Bot, Film, Download } from "lucide-react";

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
				<div className="flex-1 flex flex-col items-start">
					<span className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#333333] rounded-full px-4 py-2 mb-4 shadow-lg bg-gradient-to-tr from-indigo-500 to-purple-600">
						<VideoIcon className="h-7 w-7 text-white" />
						<span className="text-white font-semibold text-lg">
							AI Video Generator
						</span>
					</span>
					<h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6 leading-tight">
						Instantly Turn{" "}
						<span className="text-indigo-400">Text</span> Into{" "}
						<span className="text-purple-400">Engaging Videos</span>
					</h1>
					<p className="text-lg text-zinc-400 mb-8 max-w-xl">
						Enter your topic or script and let our AI do the magic. Create
						professional videos in seconds—no editing skills required!
					</p>
					<Button
						size="lg"
						className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg px-8 py-3 rounded-xl shadow-lg shadow-purple-500/20 hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center gap-2"
						onClick={handleGetStarted}
					>
						<Sparkles className="h-5 w-5" />
						Get Started
					</Button>
				</div>
				<div className="flex-1 flex justify-center items-center">
					<div className="relative">
						<img
							src="/hero-video-preview.png"
							alt="Video Preview"
							className="w-[350px] md:w-[420px] rounded-2xl shadow-2xl border-4 border-white/60"
						/>
						<span className="absolute -top-6 -left-6 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full p-4 shadow-lg">
							<VideoIcon className="h-8 w-8 text-white" />
						</span>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
		<section className="w-full max-w-6xl mt-4">
			<h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14">
				How Does {" "}
				<span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
					Lumosify
				</span> Work?
			</h2>
			<div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
				{steps.map((step, idx) => (
					<div key={idx} className="relative flex-1 flex flex-col items-center min-w-[200px]">
						{/* Connector line */}
						{idx !== steps.length - 1 && (
							<div className="hidden md:block absolute top-1/2 right-0 w-full h-1 z-0">
								<div className="h-1 w-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-purple-500/20"></div>
							</div>
						)}
						<div className="group relative z-10 bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col items-center px-7 py-10 rounded-2xl">
							<div className="absolute -top-8 left-1/2 -translate-x-1/2 transform transition-transform duration-300 group-hover:scale-110">
								<div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20 border-4 border-slate-950">
									{step.icon}
								</div>
							</div>
							<div className="mt-10 text-center">
								<div className="text-lg font-bold text-white mb-2">{step.title}</div>
								<p className="text-zinc-400 text-base">{step.desc}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
		</main>
	);
};

export default Home;