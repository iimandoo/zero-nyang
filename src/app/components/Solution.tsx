import { motion } from "motion/react";
import { Scan, Clock, TrendingUp, Sparkles, MessageCircle } from "lucide-react";
import { useState } from "react";

export function Solution() {
  const [isScanning, setIsScanning] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setShowResults(false);
    setTimeout(() => {
      setIsScanning(false);
      setShowResults(true);
    }, 2500);
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-100 rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* 헤더 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 border border-cyan-200">
              <Scan className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-semibold">AI 엑스레이 분석</span>
            </div>
            <h2 className="black-han-sans-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight px-4">
              본심 엑스레이로
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                진짜 의도를 파악
              </span>
              한다냥
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto px-4">
              감정 빼고 팩트만 보세요. 제로의 엑스레이는 거짓말을 하지 않습니다.
            </p>
          </motion.div>

          {/* 기능 시연 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-md mx-auto"
          >
            {/* 카카오톡 스타일 채팅 UI */}
            <div className="bg-[#B2C7D9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-slate-300">
              {/* 카카오톡 헤더 */}
              <div className="bg-[#95A8BA] px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between border-b border-slate-400/30">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-xs sm:text-sm">상사</p>
                    <p className="text-[10px] sm:text-xs text-slate-600">1</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Scan className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
                </div>
              </div>

              {/* 채팅 내용 */}
              <div className="p-3 sm:p-4 min-h-[350px] sm:min-h-[400px] space-y-3 sm:space-y-4">
                {/* 상대방 메시지 (노란색 말풍선) */}
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full flex-shrink-0" />
                  <div className="flex-1">
                    <div className="relative bg-white rounded-xl sm:rounded-2xl rounded-tl-none px-3 sm:px-4 py-2.5 sm:py-3 shadow-md max-w-[90%] sm:max-w-[85%] inline-block">
                      <p className="text-xs sm:text-sm text-slate-900 leading-relaxed">
                        "진짜 죄송한데 이것 좀{" "}
                        <span className="relative inline-block">
                          <span className="relative z-10 font-bold">살짝</span>
                          <span className="absolute inset-0 bg-yellow-200 -skew-x-12 opacity-60" />
                        </span>{" "}
                        도와주실 수 있을까요?{" "}
                        <span className="relative inline-block">
                          <span className="relative z-10 font-bold">믿을 사람이 너뿐이라</span>
                          <span className="absolute inset-0 bg-yellow-200 -skew-x-12 opacity-60" />
                        </span>
                        ..😭"
                      </p>
                    </div>
                    <p className="text-[10px] sm:text-xs text-slate-600 mt-1 ml-1">오후 2:34</p>
                  </div>
                </div>

                {/* 스캔 버튼 */}
                <div className="text-center py-3 sm:py-4">
                  <motion.button
                    onClick={handleScan}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isScanning}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity" />
                    <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-lg flex items-center gap-2">
                      <Scan className={`w-3 h-3 sm:w-4 sm:h-4 ${isScanning ? 'animate-spin' : ''}`} />
                      {isScanning ? '스캔 중...' : '제로 엑스레이 스캔'}
                    </div>
                  </motion.button>
                </div>

                {/* 스캔 애니메이션 */}
                {isScanning && (
                  <div className="space-y-2">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 2.5, ease: "easeInOut" }}
                      className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
                    />
                    <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-slate-600">
                      <Sparkles className="w-3 h-3 animate-pulse" />
                      <span>AI가 메시지를 분석하고 있습니다...</span>
                    </div>
                  </div>
                )}

                {/* 엑스레이 결과 (내 메시지 스타일) */}
                {showResults && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-2 sm:space-y-3"
                  >
                    {/* 제로 AI 분석 결과 1 */}
                    <div className="flex items-end gap-2 justify-end">
                      <p className="text-[10px] sm:text-xs text-slate-600">오후 2:35</p>
                      <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 sm:border-2 rounded-xl sm:rounded-2xl rounded-tr-none px-3 sm:px-4 py-2.5 sm:py-3 shadow-md max-w-[90%] sm:max-w-[85%]">
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-[10px] sm:text-xs font-bold text-slate-900 mb-0.5 sm:mb-1">
                              <span className="text-red-600">'살짝'</span> 분석 결과
                            </p>
                            <p className="text-[10px] sm:text-xs text-slate-700 leading-relaxed">
                              <span className="font-bold text-red-600">소요 시간 200%</span>
                              <br />
                              3시간 이상의 노가다 예상
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 제로 AI 분석 결과 2 */}
                    <div className="flex items-end gap-2 justify-end">
                      <p className="text-[10px] sm:text-xs text-slate-600">오후 2:35</p>
                      <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 sm:border-2 rounded-xl sm:rounded-2xl rounded-tr-none px-3 sm:px-4 py-2.5 sm:py-3 shadow-md max-w-[90%] sm:max-w-[85%]">
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-[10px] sm:text-xs font-bold text-slate-900 mb-0.5 sm:mb-1">
                              <span className="text-orange-600">'너뿐이라'</span> 분석 결과
                            </p>
                            <p className="text-[10px] sm:text-xs text-slate-700 leading-relaxed">
                              <span className="font-bold text-orange-600">압박 지수 95%</span>
                              <br />
                              거절하기 힘든 심리 이용
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 제로의 조언 */}
                    <div className="flex items-end gap-2 justify-end">
                      <p className="text-[10px] sm:text-xs text-slate-600">오후 2:35</p>
                      <div className="bg-[#FFE812] rounded-xl sm:rounded-2xl rounded-tr-none px-3 sm:px-4 py-2.5 sm:py-3 shadow-md max-w-[90%] sm:max-w-[85%]">
                        <p className="text-[10px] sm:text-xs text-slate-900 font-semibold leading-relaxed">
                          냉정하게 판단하라냥! 🐱
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* 카카오톡 하단 입력창 */}
              <div className="bg-white border-t border-slate-300 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2">
                <button className="text-slate-500 hover:text-slate-700">
                  <span className="text-lg sm:text-xl">+</span>
                </button>
                <div className="flex-1 bg-slate-100 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
                  <p className="text-[10px] sm:text-xs text-slate-400">메시지 입력</p>
                </div>
                <button className="bg-slate-200 text-slate-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-semibold">
                  전송
                </button>
              </div>
            </div>
          </motion.div>

          {/* 하단 설명 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 sm:mt-16 text-center px-4"
          >
            <p className="text-base sm:text-lg md:text-xl text-slate-600">
              제로가 분석한 결과를 보고 <span className="font-bold text-slate-900">냉정하게 판단</span>하라냥!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}