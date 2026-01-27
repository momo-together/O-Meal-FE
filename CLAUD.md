# O-MEAL 프로젝트 가이드

식당 추천 서비스 O-MEAL의 프론트엔드 프로젝트입니다.

## 기술 스택

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4**

### 개발 도구

- **Biome**: 린터 및 포맷터 (ESLint + Prettier 대체)

### 테스팅

- **Jest 30**: 테스트 러너
- **Testing Library**: React 컴포넌트 테스트 (`@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`)

### 패키지 매니저

- **pnpm** (workspace 지원)

## 코딩 컨벤션

### TypeScript 설정

- **Strict Mode**: 모든 strict 옵션 활성화
- **Module System**: ESNext with bundler resolution
- **Target**: ES2017
- **JSX**: react-jsx (React 17+ 새로운 JSX Transform)
- **Path Alias**: `@/*` → 프로젝트 루트 (`"./*"`)

### 코드 포맷팅 (Biome)

- **Indent**: 스페이스 2칸
- **Line Width**: 160자
- **Quote Style**: 더블 쿼트 (`"`)
- **Recommended Rules**: Biome 권장 규칙 활성화
- **Organize Imports**: 자동 import 정리 활성화

### 컴포넌트 작성 규칙

#### 1. 파일 구조

```typescript
// Component.tsx
interface ComponentProps {
  /** JSDoc 형식의 Props 설명 */
  propName: string;
  optionalProp?: boolean;
}

const Component = ({ propName, optionalProp = false }: ComponentProps) => {
  return <div className="...">{/* 컴포넌트 내용 */}</div>;
};

export default Component;
```

#### 2. 스타일링

- **Tailwind CSS** 클래스를 사용하여 스타일링
- 인라인 `className`에 Tailwind 유틸리티 클래스 작성

#### 3. Props 인터페이스

- Props는 항상 `interface`로 정의 (type 사용 지양)
- 컴포넌트명 + Props 네이밍 (`ComponentProps`)
- JSDoc 주석으로 Props 설명 추가
- Optional props에는 기본값 설정

#### 4. 접근성 (a11y)

- `aria-label`, `aria-hidden` 등 ARIA 속성 적극 활용
- `tabIndex`로 키보드 네비게이션 지원
- `role` 속성으로 의미론적 역할 명시
- 스크린 리더를 위한 설명 제공

```typescript
<div
  tabIndex={0}
  role="group"
  aria-label={`곡명 ${songTitle} 아티스트명 ${artist}`}
>
  <h2 aria-hidden={true}>{songTitle}</h2>
  <p aria-hidden={true}>{artist}</p>
</div>
```

#### 5. Biome Ignore 주석

- 특정 규칙을 무시해야 할 경우 이유와 함께 주석 작성

```typescript
// biome-ignore lint/correctness/useExhaustiveDependencies: 첫 마운트시에만 계산
useEffect(() => {
  // ...
}, []);
```

#### 6. 기본 Export

- 컴포넌트는 기본 export 사용 (`export default Component`)
- 유틸리티 함수나 타입은 named export 사용 가능

### 테스팅 규칙

#### 도메인 로직 테스트

도메인 로직(비즈니스 로직, 유틸리티 함수, 훅)은 **TDD(Test-Driven Development)** 방식으로 개발합니다.

**TDD 사이클 (Red-Green-Refactor)**

1. **Red**: 실패하는 테스트 먼저 작성
2. **Green**: 테스트를 통과하는 최소한의 코드 작성
3. **Refactor**: 코드 개선 및 리팩토링

```typescript
// 1. Red - 테스트 먼저 작성 (실패)
// utils/formatDate.test.ts
import { formatDate } from "./formatDate";

describe("formatDate", () => {
  it("should format date to YYYY-MM-DD", () => {
    const date = new Date("2024-01-15");
    expect(formatDate(date)).toBe("2024-01-15");
  });

  it("should handle invalid date", () => {
    expect(formatDate(null)).toBe("");
  });
});

// 2. Green - 테스트를 통과하는 코드 작성
// utils/formatDate.ts
export const formatDate = (date: Date | null): string => {
  if (!date) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// 3. Refactor - 필요시 리팩토링
```

#### 테스트 커버리지 목표

- **도메인 로직**: 90% 이상
- **유틸리티 함수**: 100%

#### 테스트 실행

```bash
# 테스트 실행
pnpm test

# watch 모드
pnpm test:watch
```

## 개발 워크플로우

### 설치 및 실행

```bash
pnpm install
pnpm dev          # 개발 서버 실행
pnpm build        # 프로덕션 빌드
pnpm test         # 테스트 실행
```

### 코드 품질 관리

```bash
npx @biomejs/biome check .     # 린트 검사
npx @biomejs/biome format .    # 포맷팅
npx @biomejs/biome check --write .  # 자동 수정
```

### Figma 디자인 구현 (MCP 연동)

Figma MCP를 통해 디자인을 코드로 변환할 수 있습니다.

#### URL 형식

```
https://figma.com/design/:fileKey/:fileName?node-id=:nodeId
```

#### 구현 프로세스

1. **Figma URL 제공**: 구현할 컴포넌트의 Figma URL 전달
2. **디자인 컨텍스트 조회**: MCP를 통해 디자인 정보, 스타일, 에셋 URL 추출
3. **컴포넌트 구현**: 프로젝트 컨벤션에 맞게 코드 생성
   - Tailwind CSS 사용
   - 접근성(a11y) 속성 포함

#### 사용 가능한 MCP 도구

- `get_design_context`: 디자인 정보 및 코드 생성
- `get_screenshot`: 노드 스크린샷 생성
- `get_variable_defs`: 디자인 변수(색상, 폰트 등) 조회
- `get_metadata`: 노드 구조 메타데이터 조회

## 주의사항

1. **접근성을 고려**한 마크업과 ARIA 속성 사용
2. **TypeScript strict mode** 준수 - any 타입 사용 지양
3. **Biome 규칙** 준수 - 커밋 전 반드시 검사
4. **테스트 작성** - Jest를 통한 도메인 로직 테스트

## Git 브랜치 전략

- `develop`: 개발 브랜치
- Feature 브랜치에서 작업 후 develop으로 PR

## Source of Truth

- React behavior should follow the official React documentation.
- TypeScript types should prefer correctness over convenience.
- Styling decisions should align with Tailwind CSS conventions.
- Code formatting and linting must follow Biome rules.
