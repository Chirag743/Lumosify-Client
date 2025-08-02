import axios from "axios";
import type { NavigateFunction } from "react-router-dom";
import { showToast } from "../ui/custom-toast";

interface ErrorResponse {
  message?: string;
  error?: string;
  details?: string[];
}

export const handleApiError = (error: unknown, navigate: NavigateFunction) => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    console.log(status);
    const data = error.response?.data as ErrorResponse | undefined;
    
    // Get the most appropriate error message
    const errorMessage = data?.message || data?.error || 
      (typeof data === 'string' ? data : "An error occurred");

    switch (status) {
      case 401: // Unauthorized
        showToast({message: errorMessage, type: "error"});
        navigate("/login");
        break;

      case 403: // Forbidden
        showToast({message: errorMessage, type: "error"});
        break;

      case 404: // Not Found
        showToast({message: errorMessage, type: "error"});
        break;

      case 409: // Conflict
        showToast({message: errorMessage, type: "error"});
        break;

      case 400: // Bad Request
        // Handle validation errors
        if (data?.details && Array.isArray(data.details)) {
          // If we have multiple validation errors, show them in a list
          showToast({message: "Validation Errors:\n" + data.details.join("\n"), type: "error"});
       } else {
          showToast({message: errorMessage, type: "error"});
        }
        break;

      case 422: // Unprocessable Entity
        showToast({message: errorMessage, type: "error"});
        break;

      case 429: // Too Many Requests
        showToast({message: errorMessage, type: "error"});
        break;

      case 500: // Internal Server Error
        showToast({message: errorMessage, type: "error"});
        // Log the error for debugging
        console.error("Server Error:", error);
        break;

      default:
        showToast({message: "An unexpected error occurred. Please try again.", type: "error"});
        // Log unhandled errors
        console.error("Unhandled Error:", error);
    }
  } else {
    // Handle non-Axios errors (network errors, etc.)
    showToast({message: "An unexpected error occurred. Please try again.", type: "error"});
    console.error("Non-Axios Error:", error);
  }
};