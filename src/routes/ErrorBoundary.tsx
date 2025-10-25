import { useEffect, type FC } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { Outlet, useNavigate } from 'react-router-dom';


const GlobalError: FC<FallbackProps> = ({ resetErrorBoundary, error }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    resetErrorBoundary();
  };

  useEffect(() => {
    console.error('Error caught by ErrorBoundary:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center gap-3">
      <img
        src={"/icons/warning_sign.svg"}
        alt="error"
        className="w-80 h-80 object-contain"
      />
      <h1 className="text-3xl font-bold text-[#06254B]">404</h1>
      <h2 className="text-lg font-semibold text-black">OOPS!</h2>
      <h2 className="text-sm text-gray-500">Page Not Found</h2>

      <button
        onClick={goBack} // 👈 Go back one page
        className="mt-4 flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
      >
        Go Back
      </button>
    </div>
  );
};

export const ErrorBoundaryLayout = () => {
  return (
    <ErrorBoundary FallbackComponent={GlobalError}>
      <Outlet />
    </ErrorBoundary>
  );
};
