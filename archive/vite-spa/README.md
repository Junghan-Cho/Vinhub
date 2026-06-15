# Vite SPA (레거시 참고용)

Next.js 마이그레이션 이전의 **Vite + React Router** 단일 페이지 앱입니다.

## 상태

- **루트 `npm run build` / `npm run dev`와 무관**합니다. 프로덕션은 루트 `app/`(Next.js App Router)만 사용합니다.
- 이 폴더는 **삭제하지 않고 참고 전용**으로 보관합니다. 신규 기능은 루트 `app/`, `lib/`, `data/`에만 추가하세요.

## 참고할 만한 구현

| 경로 | 내용 |
|------|------|
| `src/components/WineMap.tsx` | Leaflet 지도 뷰 |
| `src/components/WineGlobe.tsx` | globe.gl 지구본 뷰 |
| `src/pages/RecommendBlend.tsx` | 블렌딩 기반 추천 |
| `src/pages/Map.tsx` | 리스트 / 지도 / 글로브 전환 UI |

## 데이터

- **정본**: 레포 루트 [`data/`](../../data/)
- `src/data/`는 이전 스냅샷이며 루트 `data/`와 **동기화되지 않습니다**.

## 브랜드·배포

- UI 브랜드명은 당시 **Winehub** 기준입니다. 현재 웹은 **Vinhub**입니다.
- `netlify.toml`은 Vite SPA(`dist` + `index.html` 리라이트)용입니다. 현재 Vercel 배포(Next)와는 별개입니다.

## 단독 실행 (선택)

이 SPA를 다시 띄우려면 이 디렉터리 기준으로 Vite 의존성·스크립트를 별도 구성해야 합니다. 팀 기본 워크플로는 루트 Next 앱만 사용합니다.
