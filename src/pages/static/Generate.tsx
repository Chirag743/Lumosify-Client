import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "motion/react"
import Form from '@/components/static/GenerateForm'
import VideoPlayer from '@/components/static/VideoPlayer'

const Generate = () => {
    const [videoPath, setVideoPath] = useState("");

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] py-8 px-4 pt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-2xl"
            >
                <Card className="w-full bg-[#1A1A1A] border-[#333333]">
                    <CardHeader>
                        <CardTitle className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2 text-center">
                            Create Your Video
                        </CardTitle>
                        <CardDescription className="text-zinc-400 text-center text-base md:text-lg">
                            Turn your ideas into engaging videos in seconds!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form setVideoPath={setVideoPath} />
                        {videoPath && (
                            <VideoPlayer videoPath={videoPath} />
                        )}
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}

export default Generate