import { AlertCircle } from "lucide-react";

export const ErrorState = ({
  message,
  onRetry,
  onBack,
}: {
  message: string;
  onRetry: () => void;
  onBack: () => void;
}) => (
  <div className="flex flex-col items-center justify-center py-12">
    <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
    <p className="text-gray-700 mb-4">{message}</p>
    <div className="flex gap-3">
      <button
        onClick={onBack}
        className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
      >
        Back to List
      </button>
      <button
        onClick={onRetry}
        className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);
