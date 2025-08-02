import { Alert } from "@/components/ui/alert"
import { toast } from "sonner"
import { motion } from "motion/react"
import { CheckCircle2, XCircle, AlertCircle, Loader2 } from "lucide-react"

interface ToastProps {
  message: string
  type?: "success" | "error" | "loading" | "info"
}

type ToastId = string | number

const toastIcons = {
  success: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
  error: <XCircle className="h-5 w-5 text-red-500" />,
  loading: <Loader2 className="h-5 w-5 text-purple-500 animate-spin" />,
  info: <AlertCircle className="h-5 w-5 text-blue-500" />,
}

const toastStyles = {
  success: "border-emerald-500/20 bg-emerald-500/10 text-emerald-500",
  error: "border-red-500/20 bg-red-500/10 text-red-500",
  loading: "border-purple-500/20 bg-purple-500/10 text-purple-500",
  info: "border-blue-500/20 bg-blue-500/10 text-blue-500",
}

export const showToast = ({ message, type = "info" }: ToastProps) => {
  toast.custom((_: ToastId) => (
    <motion.div
      initial={{ opacity: 0, y: -100, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="w-full"
    >
      <Alert className={`
        flex items-center gap-3 border backdrop-blur-xl shadow-lg 
        ${toastStyles[type]}
      `}>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {toastIcons[type]}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="font-medium"
        >
          {message}
        </motion.p>
      </Alert>
    </motion.div>
  ), {
    duration: 4000,
    position: "top-center",
  })
}