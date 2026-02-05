import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { Heart, Gift, Sparkles, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import zeroImage from "figma:asset/7bdd78b52fda747da38bcea9e119dcff36853292.png";

export function FinalCTA() {
  const [likeCount, setLikeCount] = useState(4285);
  const [hasLiked, setHasLiked] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikeCount((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      console.log("Email submitted:", email);
    }
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
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
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-slate-900 rounded-full blur-[150px] opacity-5"
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
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-slate-800 rounded-full blur-[150px] opacity-5"
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* 좋아요 카운터 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12"
          >
            <motion.button
              onClick={handleLike}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div
                className={`absolute -inset-2 sm:-inset-3 rounded-full blur-xl transition-all duration-300 ${
                  hasLiked
                    ? "bg-gradient-to-r from-pink-500 to-red-500 opacity-60 animate-pulse"
                    : "bg-slate-900 opacity-20 group-hover:opacity-40"
                }`}
              />
              <div
                className={`relative inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 rounded-full transition-all duration-300 border-4 ${
                  hasLiked
                    ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-[0_0_60px_rgba(236,72,153,0.6)] border-pink-300 scale-105"
                    : "bg-white text-slate-800 hover:bg-slate-50 border-slate-900 shadow-2xl hover:border-slate-700"
                }`}
              >
                <Heart
                  className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-all duration-300 ${hasLiked ? "fill-current scale-110 animate-bounce" : ""}`}
                />
                <span className="text-base sm:text-lg md:text-xl font-bold">
                  현재{" "}
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black mx-1 sm:mx-2">
                    {likeCount.toLocaleString()}
                  </span>
                  명의 집사가
                  <br className="sm:hidden" />
                  제로를 기다리고 있다냥!
                </span>
              </div>
            </motion.button>
          </motion.div>

          {/* 사전 예약 폼 */}
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white border-2 border-slate-200 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2rem] shadow-2xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 text-center px-6">
                  지금 예약하고
                  <br />
                  <span className="text-slate-900">
                    호구 탈출
                  </span>
                  하라냥!
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 text-center px-4">
                  사전 예약하면 특별 혜택을 드린다
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6 max-w-2xl mx-auto"
                >
                  <div className="relative">
                    <Mail className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                    <Input
                      type="email"
                      placeholder="이메일 주소를 입력해 주세요"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 sm:pl-14 pr-4 sm:pr-6 py-5 sm:py-6 md:py-7 text-base sm:text-lg rounded-lg sm:rounded-2xl bg-white border-2 border-slate-200 focus:border-slate-900 transition-all text-slate-900 placeholder:text-slate-500"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white py-5 sm:py-6 md:py-7 text-base sm:text-lg md:text-xl rounded-xl sm:rounded-2xl font-bold shadow-[0_0_40px_rgba(0,0,0,0.2)] hover:shadow-[0_0_60px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Sparkles className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                    사전 예약 특별 혜택 받기
                  </Button>
                </form>

                {/* 혜택 안내 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 sm:mt-10 bg-slate-50  p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-900 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 text-base sm:text-lg">
                        1개월 무료 체험
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-slate-300 rounded-2xl sm:rounded-[2.5rem] blur-2xl opacity-30" />

              <div className="relative bg-slate-900 text-white p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-[2rem] shadow-2xl text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                >
                  <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6">
                    🎉
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                    환영한다냥!
                  </h3>
                  <p className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 opacity-90">
                    <span className="font-semibold break-all">
                      {email}
                    </span>
                    로
                    <br />
                    확인 메일을 보냈다냥.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl opacity-80">
                    제로가 곧 집사를 도와줄 준비를 하고 있다냥!
                    😸
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* 제로의 마지막 한마디 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 sm:mt-20"
          >
            <div className="flex flex-col items-center gap-6">
              {/* 말풍선 */}
              <div className="relative max-w-xl mx-auto px-4 flex flex-col items-center">
                <div className="relative bg-slate-100 text-slate-600 px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 rounded-2xl shadow-xl">
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center">
                    😺 집사야, 이제 준비는 다 끝났다냥.
                    <br className="hidden sm:block" />
                    내가 집사 옆에서 딱 붙어 있을게냥.{" "}
                    <span className="font-bold">
                      진짜 완벽한 전략이다냥! ✨
                    </span>
                  </p>

                  {/* 말풍선 꼬리 */}
                  <div className="absolute -bottom-3 left-[50%] -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-slate-100" />
                </div>

                {/* 서명 */}
                <p className="text-center text-slate-900 mt-3 sm:mt-4 font-bold text-sm sm:text-base md:text-lg">
                  - 제로 🐾
                </p>
              </div>

              {/* 하단 고양이 이모티콘들 */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}