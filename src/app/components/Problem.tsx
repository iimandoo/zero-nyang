import { motion } from "motion/react";
import { MessageCircle, Zap } from "lucide-react";

const problems = [
  {
    emoji: "😰",
    message: "바쁘신데 진짜 죄송해요ㅠㅠ",
    context: "상사의 업무 떠넘기기",
    highlight: "죄송해요",
  },
  {
    emoji: "🤔",
    message: "나니까 이런 말 해주는 거야.",
    context: "친구가 가장한 가스라이팅",
    highlight: "나니까",
  },
];

export function Problem() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* 헤더 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 border border-red-100">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-semibold">집사 긴급 점검</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight px-4">
              집사야,
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                또 기 빨리고
              </span>{" "}
              왔냥?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 px-4">
              이런 메시지들 때문에 멘탈 탈탈 털리고 있지 않냥?
            </p>
          </motion.div>

          {/* 문제 상황 카드들 */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative"
              >
                {/* 카카오톡 스타일 채팅 UI */}
                <div className="bg-[#B2C7D9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-slate-300">
                  {/* 카카오톡 헤더 */}
                  <div className="bg-[#95A8BA] px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between border-b border-slate-400/30">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <motion.div 
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full flex items-center justify-center text-2xl sm:text-3xl"
                        animate={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                      >
                        {problem.emoji}
                      </motion.div>
                      <div>
                        <p className="font-bold text-slate-800 text-xs sm:text-sm">{problem.context}</p>
                        <p className="text-[10px] sm:text-xs text-slate-600">1</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
                    </div>
                  </div>

                  {/* 채팅 내용 */}
                  <div className="p-3 sm:p-4 min-h-[140px] sm:min-h-[160px] flex flex-col justify-center">
                    {/* 상대방 메시지 */}
                    <div className="flex items-start gap-2">
                      <motion.div 
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full flex-shrink-0 flex items-center justify-center text-xl sm:text-2xl"
                        animate={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                      >
                        {problem.emoji}
                      </motion.div>
                      <div className="flex-1">
                        <div className="relative bg-white rounded-xl sm:rounded-2xl rounded-tl-none px-3 sm:px-4 py-2.5 sm:py-3 shadow-md max-w-[90%] sm:max-w-[85%] inline-block">
                          <p className="text-xs sm:text-sm text-slate-900 leading-relaxed">
                            "{problem.message}"
                          </p>
                        </div>
                        <p className="text-[10px] sm:text-xs text-slate-600 mt-1 ml-1">
                          {index === 0 ? "오전 11:23" : "오후 3:47"}
                        </p>
                      </div>
                    </div>
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
            ))}
          </div>

          {/* 제로의 멘트 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 sm:mt-16 text-center px-4"
          >
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl sm:rounded-2xl blur-xl opacity-30" />
              <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl shadow-2xl">
                <p className="text-base sm:text-lg md:text-xl font-bold">
                  "'본심'을 제로가 읽어준다냥!"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}