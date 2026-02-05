import { motion } from "motion/react";
import { Shield, Sparkles, Handshake } from "lucide-react";
import { useState } from "react";

const stances = [
  {
    id: "firm",
    icon: Shield,
    title: "단호박",
    color: "from-red-500 to-pink-500",
    borderColor: "border-red-200",
    bgGradient: "from-black-50 to-pink-50",
    description: "명확하게 경계를 긋는 답변",
    example:
      "죄송하지만 현재 다른 업무로 가득 차서 도와드리기 어려울 것 같습니다.",
  },
  {
    id: "witty",
    icon: Sparkles,
    title: "위트",
    color: "from-purple-500 to-fuchsia-500",
    borderColor: "border-purple-200",
    bgGradient: "from-purple-50 to-black-50",
    description: "유머러스하게 거절하는 답변",
    example:
      "제가 도와드리면 '살짝'이 아니라 '완전히' 달라질 텐데, 그 정도 시간은 없네요! 😅",
  },
  {
    id: "compromise",
    icon: Handshake,
    title: "타협",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-200",
    bgGradient: "from-black-50 to-cyan-50",
    description: "조건부로 협력하는 답변",
    example:
      "내일 오전까지 가능하다면 30분 정도는 도와드릴 수 있어요. 그 이상은 어려울 것 같습니다.",
  },
];

export function Action() {
  const [selectedStance, setSelectedStance] = useState<
    string | null
  >(null);

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* 헤더 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight px-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                답장 고민은 제로에게,
              </span>
              <br />
              결정은 집사에게.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto px-4">
              복잡한 상황 분석은 제로에게 맡기고, 집사님은
              제공된 전략 중 최선의 선택만 하세요.
            </p>
          </motion.div>

          {/* 스탠스 카드들 */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16">
            {stances.map((stance, index) => {
              const Icon = stance.icon;

              return (
                <motion.div
                  key={stance.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                >
                  {/* 카카오톡 스타일 채팅 UI */}
                  <div className="bg-[#B2C7D9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 border-slate-300 h-full flex flex-col">
                    {/* 카카오톡 헤더 */}
                    <div className="bg-[#95A8BA] px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 border-b border-slate-400/30">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-xs sm:text-sm">
                          {stance.title}
                        </p>
                        <p className="text-[10px] sm:text-xs text-slate-600">
                          {stance.description}
                        </p>
                      </div>
                    </div>

                    {/* 채팅 내용 */}
                    <div className="p-3 sm:p-4 flex-1 flex flex-col justify-center space-y-3">
                      {/* 내 답변 (제로의 추천) */}
                      <div className="flex items-end gap-2 justify-end">
                        <div className="bg-[#FFE812] rounded-xl sm:rounded-2xl rounded-tr-none px-3 sm:px-4 py-2.5 sm:py-3 shadow-md max-w-[85%]">
                          <p className="text-xs sm:text-sm text-slate-900 leading-relaxed">
                            {stance.example}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 하단 안내 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative px-4"
          >
            <div className="relative bg-slate-50 border border-slate-200 text-slate-700 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-sm text-center">
              <p className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-slate-600">
                💡 제로의 팁
              </p>
              <p className="text-sm sm:text-base md:text-md text-slate-600 leading-relaxed max-w-2xl mx-auto">
                상황에 따라 스탠스를 선택하면, 제로가 자동으로
                완벽한 답장 초안을 만들어준다냥!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}