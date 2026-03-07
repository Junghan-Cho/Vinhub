export default function VinlogLandingPage() {
  return (
    <div className="space-y-10">
      <header className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">VinLog App</p>
          <h1 className="font-display text-3xl text-slate-50 sm:text-4xl">
            당신의 모든 테이스팅이
            <br />
            구조화된 데이터가 됩니다.
          </h1>
          <p className="max-w-xl text-sm text-slate-300">
            VinLog는 WSET SAT를 기반으로 테이스팅 노트를 자동 구조화하는 와인 기록 앱입니다. 병을 찍고, 몇 가지
            질문에 답하면, 나머지는 AI와 데이터가 처리합니다.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-slate-50 hover:bg-primary-soft">
              앱 스토어 / 플레이 스토어 링크 자리
            </button>
            <button className="rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-300 hover:border-slate-500">
              나중에 실제 스토어 배지로 교체
            </button>
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-slate-800 bg-gradient-to-br from-surface to-background p-5 text-xs text-slate-200">
          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Example VinLog Screen
          </p>
          <ul className="space-y-2">
            <li>· 최근 테이스팅한 와인 타임라인</li>
            <li>· 품종/스타일/가격대별 필터</li>
            <li>· 과거의 나와 현재의 나를 비교하는 SAT 구조 뷰어</li>
            <li>· AI 비전과 연동된 라벨/색 인식 결과</li>
          </ul>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-100">1. 캡처(Capture)</h2>
          <p className="text-sm text-slate-300">
            라벨이나 색을 찍으면, VinLog가 AI 비전과 데이터베이스를 이용해 후보 와인을 제안합니다.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-100">2. 구조화(Structure)</h2>
          <p className="text-sm text-slate-300">
            SAT 포맷에 맞춘 최소한의 질문에만 답하면, 나머지 필드는 VinLog가 자동으로 채워 줍니다.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-100">3. 활용(Leverage)</h2>
          <p className="text-sm text-slate-300">
            기록된 노트는 추천, 페어링, 학습 히스토리, 복습 기능에 모두 활용됩니다. 이 웹 쇼룸은 그 입구입니다.
          </p>
        </div>
      </section>
    </div>
  )
}

