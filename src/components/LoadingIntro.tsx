import { useEffect, useState } from 'react';

interface LoadingIntroProps {
  onLoadComplete: () => void;
}

export default function LoadingIntro({ onLoadComplete }: LoadingIntroProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 2500;
    const startTime = Date.now();

    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress === 100) {
        clearInterval(progressTimer);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            onLoadComplete();
          }, 500);
        }, 300);
      }
    }, 16);

    return () => clearInterval(progressTimer);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 bg-gray-950 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950"></div>

      <div className="relative z-10 w-full max-w-md px-8 text-center">
        <div className="mb-12 inline-block p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
          <div className="text-4xl">🔒</div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
          Initializing Security Protocol...
        </h1>

        <div className="mb-8">
          <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900"></div>

            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300 ease-out shadow-lg shadow-cyan-500/50"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="mt-4 text-sm text-gray-400 font-mono">
            <span className="text-cyan-400">{Math.floor(progress)}%</span>
            <span> - Loading System Resources</span>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
