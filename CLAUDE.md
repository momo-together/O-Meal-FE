# O-MEAL 프로젝트 가이드

식당 추천 서비스 O-MEAL의 프론트엔드 프로젝트입니다.

## 기술 스택

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4** (`@theme inline` + `@utility` 방식)
- **Variant 관리**: class-variance-authority (cva), clsx

### 개발 도구

- **Biome**: 린터 및 포맷터 (ESLint + Prettier 대체)
- **Storybook v10** (`@storybook/nextjs`, port 6006)
- **SVG**: @svgr/webpack (`import Icon from "@/assets/icons/icon.svg"`)

### 테스팅

- **Vitest**: 테스트 러너
- **Testing Library**: React 컴포넌트 테스트 (`@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`)
- **Playwright**: 브라우저 테스트

### 패키지 매니저

- **pnpm** (workspace 지원)

---

## 작업 유형별 가이드

모든 작업은 `.claude/guides/init.md`를 가장 먼저 읽는 것으로 시작한다.

| 순서 | 시점                  | 가이드 문서                      |
| ---- | --------------------- | -------------------------------- |
| 1    | 작업 시작 전          | `.claude/guides/init.md`         |
| 2    | 작업 중 - UI/컴포넌트 | `.claude/guides/ui-component.md` |
| 2    | 작업 중 - 기능 구현   | `.claude/guides/feature.md`      |
| 3    | 커밋 시               | `.claude/guides/commit.md`       |
| 4    | PR 작성 시            | `.claude/guides/pr.md`           |

---

## 코드 퀄리티 기준

모든 작업에서 아래 문서를 코드 품질 기준으로 참고한다.

- `.claude/skills/vercel-react-best-practices`

### JSDoc

외부에서 사용되는 인터페이스, 커스텀 훅, 유틸리티 함수 등 명세가 있는 모든 곳에 JSDoc을 작성한다.

```typescript
/**
 * 날짜를 YYYY-MM-DD 형식으로 포맷팅한다.
 * @param date - 포맷팅할 날짜
 * @returns 포맷팅된 날짜 문자열. 유효하지 않으면 빈 문자열 반환.
 */
export const formatDate = (date: Date | null): string => {
  // ...
};

/**
 * 좋아요 상태를 관리하는 훅
 * @param initialValue - 초기 좋아요 상태
 */
const useLike = (initialValue: boolean) => {
  // ...
};
```

---

## 프로젝트 구조

```
app/                    # Next.js App Router
  layout.tsx            # Root layout (Pretendard, SUIT 폰트 CDN)
  globals.css           # 디자인 토큰 + 타이포그래피 유틸리티

assets/
  icons/                # SVG 아이콘 (add, like, home, user)

components/             # 공통 컴포넌트

.claude/
  guides/
    init.md
    ui-component.md
    feature.md
    commit.md
    pr.md
  skills/
    vercel-react-best-practices
```

---

## 디자인 토큰 (globals.css)

`@theme inline` 블록에서 CSS 변수로 정의. Tailwind 유틸리티 클래스로 사용 가능.

- **Colors**: `primary-point`, `primary-base`, `primary-text`, `secondary-*`, `state-hover/active`, `gray-*`, `bg-*`, `status-*`
- **Typography**: `typo-display1`, `typo-h1-title`, `typo-h2-sub`, `typo-body1`, `typo-body2`, `typo-caption`, `typo-button`, `typo-button-sm`
- **Fonts**: Pretendard Variable (본문), SUIT Variable (제목)
- **Layout**: `max-w-layout` (375px)

---

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

#### 1. 파일/디렉토리 네이밍

- 컴포넌트 파일명: PascalCase (e.g., `FloatingButton.tsx`)
- 디렉토리명: camelCase (e.g., `floatingButton/`)
- 각 컴포넌트마다 `.stories.tsx` 파일 작성 (Storybook title: 컴포넌트 디렉토리 경로를 따름, e.g., `"layout/Header/Header"`)

#### 2. 파일 구조

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

#### 3. 스타일링

- **Tailwind CSS** 클래스를 사용하여 스타일링
- 인라인 `className`에 Tailwind 유틸리티 클래스 작성
- **cva**: variant가 있는 컴포넌트에서 사용
- **clsx**: 조건부 스타일링에 사용

#### 3-1. Tailwind CSS v4 문법 리뷰 (필수)

> **배경**: 팀이 Tailwind CSS v4에 익숙하지 않아, `@utility` 같은 유용한 기능을 개발 단계에서 활용하지 못하고 PR 리뷰에서야 발견한 경험이 있습니다. 이를 방지하기 위해 Claude는 스타일링 코드를 작성하거나 리뷰할 때 현재 상황에 적용 가능한 Tailwind v4 문법을 **적극적으로 소개**해야 합니다.

**지침**:

- 컴포넌트 스타일링 작업 시, 해당 작업에 유용한 Tailwind v4 문법이 있다면 코드와 함께 간단한 설명을 제공할 것
- 기존 코드에서 v4 문법으로 개선할 수 있는 부분이 보이면 제안할 것
- 단, 불필요하거나 과도한 소개는 지양하고 **현재 작업에 직접 관련된 문법만** 안내할 것

**프로젝트에서 활용 중인 v4 문법**:

| 문법            | 용도                                                               | 프로젝트 사용 예시                                     |
| --------------- | ------------------------------------------------------------------ | ------------------------------------------------------ |
| `@theme inline` | CSS 변수 기반 디자인 토큰 정의 → Tailwind 유틸리티로 자동 매핑     | `globals.css`의 색상, 타이포그래피, 레이아웃 토큰      |
| `@utility`      | 커스텀 유틸리티 클래스 정의 (여러 CSS 속성을 하나의 클래스로 묶음) | `typo-display1`, `typo-body1` 등 타이포그래피 유틸리티 |

#### 4. Props 인터페이스

- Props는 항상 `interface`로 정의 (type 사용 지양)
- 컴포넌트명 + Props 네이밍 (`ComponentProps`)
- JSDoc 주석으로 Props 설명 추가
- Optional props에는 기본값 설정

#### 5. 접근성 (a11y)

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

#### 6. Biome Ignore 주석

- 특정 규칙을 무시해야 할 경우 이유와 함께 주석 작성

```typescript
// biome-ignore lint/correctness/useExhaustiveDependencies: 첫 마운트시에만 계산
useEffect(() => {
  // ...
}, []);
```

#### 7. 기본 Export

- 컴포넌트와 훅은 기본 export 사용 (`export default Component`)
- 유틸리티 함수나 타입은 named export 사용 가능

#### 8. SVG 아이콘 Import

- `import Icon from "@/assets/icons/name.svg"` 패턴 사용 (기본 import = React 컴포넌트)
- URL 문자열이 필요한 경우에만 `import iconUrl from "@/assets/icons/name.svg?url"` 사용

---

### 테스팅 규칙

#### 도메인 로직 테스트

도메인 로직(비즈니스 로직, 유틸리티 함수, 훅)은 **TDD(Test-Driven Development)** 방식으로 개발합니다.

**TDD 사이클 (Red-Green-Refactor)**

1. **Red**: 실패하는 테스트 먼저 작성
2. **Green**: 테스트를 통과하는 최소한의 코드 작성
3. **Refactor**: 코드 개선 및 리팩토링

```typescript
// 1. Red - 테스트 먼저 작성 (실패)
import { formatDate } from "./formatDate";

describe("formatDate", () => {
  it("YYYY-MM-DD 형식으로 포맷팅되어야 한다.", () => {
    const date = new Date("2024-01-15");
    expect(formatDate(date)).toBe("2024-01-15");
  });

  it("유효하지 않는 문자를 받는다면 빈문자열을 반환해야 한다.", () => {
    expect(formatDate(null)).toBe("");
  });
});

// 2. Green - 테스트를 통과하는 코드 작성
export const formatDate = (date: Date | null): string => {
  if (!date) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
```

#### 테스트 커버리지 목표

- **도메인 로직**: 90% 이상
- **유틸리티 함수**: 100%

#### 테스트 실행

```bash
pnpm test
pnpm test:watch
```

---

## 개발 워크플로우

### 설치 및 실행

```bash
pnpm install
pnpm dev          # 개발 서버 실행
pnpm build        # 프로덕션 빌드
pnpm test         # 테스트 실행
pnpm storybook    # Storybook 실행 (port 6006)
```

### 코드 품질 관리

```bash
npx @biomejs/biome check .
npx @biomejs/biome format .
npx @biomejs/biome check --write .
```

### Figma 디자인 구현 (MCP 연동)

#### URL 형식

```
https://figma.com/design/:fileKey/:fileName?node-id=:nodeId
```

#### 구현 프로세스

1. Figma URL 제공
2. MCP를 통해 디자인 정보, 스타일, 에셋 URL 추출
3. 프로젝트 컨벤션에 맞게 코드 생성 (Tailwind CSS, 접근성 포함)

#### 사용 가능한 MCP 도구

- `get_design_context`: 디자인 정보 및 코드 생성
- `get_screenshot`: 노드 스크린샷 생성
- `get_variable_defs`: 디자인 변수(색상, 폰트 등) 조회
- `get_metadata`: 노드 구조 메타데이터 조회

---

## 주의사항

1. **접근성을 고려**한 마크업과 ARIA 속성 사용
2. **TypeScript strict mode** 준수 - any 타입 사용 지양
3. **Biome 규칙** 준수 - 커밋 전 반드시 검사
4. **테스트 작성** - Vitest를 통한 도메인 로직 테스트
5. **Tailwind v4 문법 안내** - 스타일링 코드 작성/리뷰 시 현재 작업에 유용한 Tailwind v4 문법이 있다면 소개할 것 (상세: 코딩 컨벤션 > 3-1 참고)
6. **빌드/타입 에러** - 에러가 있는 상태로 PR 올리지 않을 것. 해결 불가 시 PR에 TODO 주석과 이유 명시

---

## Git 브랜치 전략

- `develop`: 개발 브랜치 (default)
- Feature 브랜치에서 작업 후 develop으로 PR
- 브랜치명 규칙: `.claude/guides/init.md` 참고

---

## Source of Truth

- React behavior should follow the official React documentation.
- TypeScript types should prefer correctness over convenience.
- Styling decisions should align with Tailwind CSS conventions.
- Code formatting and linting must follow Biome rules.
