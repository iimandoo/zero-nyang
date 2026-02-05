import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import zeroImage from "figma:asset/7bdd78b52fda747da38bcea9e119dcff36853292.png";

export function Hero() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* 모던 그리드 배경 */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* 미니멀 원형 요소들 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-900 rounded-full blur-[120px] opacity-5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-800 rounded-full blur-[120px] opacity-5"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">

          {/* 메인 카피 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 text-slate-900 leading-tight px-4">
              언제까지 '넵!'만
              <br />
              할꺼냥?
            </h1>
          </motion.div>

          {/* 서브 카피 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4"
          >
            읽씹은 찝찝하고 답장은 답답할 때, 멘탈 비서 제로
          </motion.p>

          {/* 제로의 한마디 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-12 md:mb-16 px-4"
          >
            <div className="inline-block relative">
              <div className="relative bg-slate-900 text-white px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 rounded-2xl font-semibold text-base sm:text-lg shadow-2xl border border-slate-800">
                "이게 제일 완벽한 한 방이 될 거다냥!"
                {/* 말풍선 꼬리 */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-b-slate-900" />
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[16px] border-b-slate-800" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}