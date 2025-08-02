import { Toaster } from "sonner"

export function ToastProvider() {
  return (
    <Toaster
      theme="dark"
      position="top-center"
      expand
      richColors
      className="toaster-custom"
    />
  )
}
