# 페이지 구현 플로우

`make-ui` 스킬의 페이지 모드 단계별 지침입니다.
이 파일을 읽기 전에 `ui-conventions.md`와 `gotchas.md`를 이미 읽었다고 가정합니다.

---

## Step 2. 디자인 파악

### Figma node ID가 있는 경우

`figma:figma-implement-design` 스킬을 활용합니다.
Figma MCP(`get_design_context`)로 노드 정보를 가져와 다음을 파악합니다:

- 페이지명 및 역할 (어떤 URL에 대응하는지)
- 레이아웃 구조 (헤더, 컨텐츠, 푸터, 사이드바 등 섹션)
- 각 섹션의 크기, 간격, 스타일 값
- 인터랙티브 요소 및 상태 변화 (모달, 탭, 필터 등)
- 데이터 페칭이 필요한 영역 (리스트, 카드 등 동적 컨텐츠)
- 스크롤 동작 및 반응형 처리 필요 여부

### 이미지가 있는 경우

이미지를 분석하여 동일한 항목을 파악합니다.

결과는 내부적으로만 기록하고 사용자에게 출력하지 않습니다.

---

## Step 3. 디자인 토큰 매핑

`src/styles/theme.ts`를 읽어 디자인 수치를 토큰에 매핑합니다.

**판단 기준:**
- 1~2px 차이 → 토큰 사용
- 크게 다름 → `/* TODO: 토큰 없음 - {값} */` 주석 처리

---

## Step 4. 기존 리소스 탐색

**탐색 위치:**
- `components/` — 공통/도메인 컴포넌트
- `app/` — 기존 페이지 패턴 참조 (App Router 세그먼트 구조)

각 파일의 props 인터페이스를 확인하고, 재사용 가능한 컴포넌트와 사용법을 기록합니다.

---

## Step 5. 페이지 구현

저장 위치: `app/<segment>/page.tsx` (Next.js App Router 파일 기반 라우팅)

- URL 구조가 `app/` 폴더 계층과 일치합니다 (예: `app/restaurant/[id]/page.tsx` → `/restaurant/123`)
- 별도 라우터 등록 불필요 — 파일 생성만으로 라우트가 활성화됩니다
- 레이아웃 공유가 필요하면 같은 세그먼트에 `layout.tsx`를 추가합니다

### 기본 파일 구조

```tsx
// app/<segment>/page.tsx
import ComponentA from "@/components/componentA/ComponentA";

const PageName = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <ComponentA />
      </main>
    </div>
  );
};

export default PageName;
```

### 데이터 페칭이 있는 경우

Orval 기본 설정이 `useSuspenseQuery`이므로 반드시 Suspense + ErrorBoundary가 필요합니다 (gotchas.md G5):

```typescript
<ErrorBoundary fallback={<ErrorFallback />}>
  <Suspense fallback={<LoadingSpinner />}>
    <DataFetchingComponent />
  </Suspense>
</ErrorBoundary>
```

### 대응 컴포넌트 없는 섹션

```tsx
{/* TODO: [SectionName] - 구현 필요 */}
<S.SectionNamePlaceholder>[SectionName] 영역</S.SectionNamePlaceholder>
```

```typescript
export const SectionNamePlaceholder = styled.div`
  width: 100%;
  min-height: 48px;
  border: 1px dashed ${({ theme }) => theme.colors.gray.gray200};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray.gray300};
  ${({ theme }) => ({ ...theme.typography.caption })};
`;
```

---

## Step 6. 라우트 확인

Next.js App Router는 파일 기반 라우팅입니다. `app/<segment>/page.tsx`를 생성하면 별도 등록 없이 라우트가 활성화됩니다 (gotchas.md G6).

구현 후 다음을 확인합니다:
- 파일 경로와 원하는 URL 경로가 일치하는지 확인
- 레이아웃 공유가 필요한 경우 `layout.tsx` 추가 여부 확인

---

## Step 7. 완료 보고

```text
✅ 페이지 구현 완료

📁 생성된 파일:
  - {파일 경로}

♻️ 재사용된 컴포넌트:
  - {컴포넌트명} ({출처})

⚠️ Placeholder 처리된 섹션 ({N}개):   ← 없으면 생략
  - [{SectionName}] — {이유}

🎨 토큰 미매핑 항목:
  - {항목} 또는 없음

📌 추가 작업 필요:
  - 라우터 등록: {경로} → {등록 파일}
  - Suspense/ErrorBoundary 래퍼 확인 (데이터 페칭 영역)
  - EmotionTheme 타입 선언 미설정 (`src/types/emotion.d.ts`)   ← 미설정 시만
```
