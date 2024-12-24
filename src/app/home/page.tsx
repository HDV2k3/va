"use client";
import { useEffect, useRef, useState } from "react";
import { Trees, Gift, Star, Snowflake, BellRing } from "lucide-react";
import Image from "next/image";

const ChristmasVideoPage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showWelcome, setShowWelcome] = useState(true);

  const startExperience = async () => {
    if (audioRef.current && videoRef.current) {
      try {
        await Promise.all([videoRef.current.play(), audioRef.current.play()]);
        setShowWelcome(false);
      } catch (error) {
        console.error("Error starting media:", error);
      }
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    const audioElement = audioRef.current;

    if (videoElement) {
      const handleVideoEnded = () => {
        videoElement.play().catch(console.error);
      };
      videoElement.addEventListener("ended", handleVideoEnded);
      return () => videoElement.removeEventListener("ended", handleVideoEnded);
    }

    if (audioElement) {
      const handleAudioEnded = () => {
        audioElement.play().catch(console.error);
      };
      audioElement.addEventListener("ended", handleAudioEnded);
      return () => audioElement.removeEventListener("ended", handleAudioEnded);
    }
  }, []);

  return (
    <div className="min-h-screen bg-red-900 relative">
      {showWelcome && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="text-center text-white p-8 rounded-lg bg-green-800/50 backdrop-blur-sm">
            <h2 className="text-4xl font-bold mb-4">
              Chúc mừng giáng sinh Mỹ Dung 🎄🎄🎄
            </h2>
            <p className="mb-6 text-lg">Mãi bên V.Anh yêu yêu 🎄🎄🎄</p>
            <button
              onClick={startExperience}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-colors duration-300 animate-pulse"
            >
              Start Christmas 🎄🎄🎄
            </button>
          </div>
        </div>
      )}

      <audio ref={audioRef} loop preload="auto">
        <source
          src="/iLoveYt.net_YouTube_Last-Christmas-Remix-Merry-Christmas-Nha_Media_utZDbZ8n8M4_008_128k.mp3"
          type="audio/mpeg"
        />
      </audio>

      <header className="bg-green-800 p-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">
          Mãi bên V.Anh yêu yêu🎄🎄
        </h1>
        <p className="text-white text-lg">Chúc mừng giáng sinh Mỹ Dung 🎄🎄</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="min-h-screen bg-red-900 relative flex items-center justify-center">
          {/* Trang trí xung quanh */}
          <div className="absolute inset-0 flex flex-wrap items-center justify-center pointer-events-none">
            <Star
              size={48}
              className="text-yellow-300 animate-bounce absolute top-10 left-10"
            />
            <Snowflake
              size={32}
              className="text-white animate-spin-slow absolute top-10 right-10"
            />
            <Trees
              size={48}
              className="text-green-500 animate-pulse absolute bottom-10 left-10"
            />
            <BellRing
              size={48}
              className="text-yellow-400 animate-swing absolute bottom-10 right-10"
            />
            <Gift
              size={32}
              className="text-red-400 animate-bounce absolute top-1/2 left-5"
            />
            <Snowflake
              size={32}
              className="text-white animate-spin-slow absolute top-1/2 right-5"
            />
          </div>

          {/* Video và Hình ảnh */}
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
            {/* Video */}
            <div className="relative rounded-lg overflow-hidden shadow-lg w-full sm:w-[500px] h-[500px]">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                playsInline
                loop
              >
                <source src="/1.mp4" type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video tag.
              </video>
            </div>
            <div className="absolute inset-0 flex flex-wrap items-center justify-center pointer-events-none">
              <Star
                size={48}
                className="text-yellow-300 animate-bounce absolute top-10 left-10"
              />
              <Snowflake
                size={32}
                className="text-white animate-spin-slow absolute top-10 right-10"
              />
              <Trees
                size={48}
                className="text-green-500 animate-pulse absolute bottom-10 left-10"
              />
              <BellRing
                size={48}
                className="text-yellow-400 animate-swing absolute bottom-10 right-10"
              />
              <Gift
                size={32}
                className="text-red-400 animate-bounce absolute top-1/2 left-5"
              />
              <Snowflake
                size={32}
                className="text-white animate-spin-slow absolute top-1/2 right-5"
              />
            </div>

            {/* Hình ảnh */}
            <div className="relative rounded-lg overflow-hidden shadow-lg w-full sm:w-[500px] h-[500px]">
              <Image
                width={500}
                height={500}
                src="/81b39653-532d-4cf9-ac1d-0f44319ec867.jpg"
                alt="Không khí Giáng sinh"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex flex-wrap items-center justify-center pointer-events-none">
              <Star
                size={48}
                className="text-yellow-300 animate-bounce absolute top-10 left-10"
              />
              <Snowflake
                size={32}
                className="text-white animate-spin-slow absolute top-10 right-10"
              />
              <Trees
                size={48}
                className="text-green-500 animate-pulse absolute bottom-10 left-10"
              />
              <BellRing
                size={48}
                className="text-yellow-400 animate-swing absolute bottom-10 right-10"
              />
              <Gift
                size={32}
                className="text-red-400 animate-bounce absolute top-1/2 left-5"
              />
              <Snowflake
                size={32}
                className="text-white animate-spin-slow absolute top-1/2 right-5"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-green-800 text-white text-center p-4 mt-8">
        <p>&copy; 2024 Việt Anh - Mỹ Dung. All rights reserved.</p>
      </footer>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes swing {
          0%,
          100% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
        }
        .animate-swing {
          animation: swing 2s infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ChristmasVideoPage;
