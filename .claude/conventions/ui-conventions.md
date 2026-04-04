# UI 코딩 컨벤션

O-MEAL 프로젝트의 컴포넌트 및 페이지 구현 시 반드시 준수해야 하는 규칙입니다.
컴포넌트·페이지를 구현하는 모든 작업에서 이 파일을 참조합니다.

---

## 1. 파일 구조

컴포넌트는 단일 파일로 구현하며, Tailwind CSS 인라인 클래스로 스타일링합니다.

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

### 디렉토리 구조

- 공통 컴포넌트: `components/ui/<componentName>/<ComponentName>.tsx` (PascalCase 파일명)
- 도메인 컴포넌트: `components/specific/<domain>/<ComponentName>.tsx`
- 레이아웃 컴포넌트: `components/layout/<componentName>/<ComponentName>.tsx`
- Storybook 스토리: 컴포넌트 파일 옆에 `<ComponentName>.stories.tsx`

---

## 2. 스타일링 규칙

- **Tailwind CSS** 클래스를 인라인 `className`에 사용 (CSS 파일 분리 금지)
- **cva(class-variance-authority)**: variant가 있는 컴포넌트에서 사용
- **clsx**: 조건부 스타일링에 사용
- **모든 색상·타이포그래피·간격은 `globals.css`의 디자인 토큰 사용**

### 디자인 토큰 사용 예시

```typescript
// ✅ 올바른 사용 — globals.css에 정의된 Tailwind 토큰 사용
<div className="bg-primary-base text-primary-text typo-body1">
  ...
</div>

// ✅ cva로 variant 관리
const buttonVariants = cva("base-classes", {
  variants: {
    variant: {
      primary: "bg-primary-point text-white",
      secondary: "bg-secondary-base",
    },
  },
});
```

### 주요 디자인 토큰

| 카테고리 | 토큰 예시 |
|----------|-----------|
| 색상 | `primary-point`, `primary-base`, `primary-text`, `secondary-*`, `gray-*`, `bg-*` |
| 타이포그래피 | `typo-display1`, `typo-h1-title`, `typo-h2-sub`, `typo-body1`, `typo-body2`, `typo-caption`, `typo-button`, `typo-button-sm` |
| 레이아웃 | `max-w-layout` (375px) |

---

## 3. Props 인터페이스

- Props는 항상 `interface`로 정의 (`type` 사용 지양)
- 컴포넌트명 + Props 네이밍: `ComponentNameProps`
- JSDoc 주석으로 각 prop 설명 추가
- Optional props에 기본값 설정

---

## 4. Export 규칙

- 컴포넌트/훅은 기본 export: `export default ComponentName`
- 유틸리티 함수·타입은 named export 사용 가능

---

## 5. 접근성 (a11y)

- `aria-label`, `aria-hidden` 등 ARIA 속성 적극 활용
- `tabIndex`로 키보드 네비게이션 지원
- `role` 속성으로 의미론적 역할 명시
- 스크린 리더를 위한 텍스트 제공

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

---

## 6. TypeScript 규칙

- Strict mode 준수 — `any` 타입 사용 금지
- 사용하지 않는 변수·파라미터 금지

---

## 7. Biome 규칙

- Indent: 스페이스 2칸
- Line Width: 160자
- Quote Style: 더블 쿼트
- 특정 규칙 무시 시 이유 주석 필수:

```typescript
// biome-ignore lint/correctness/useExhaustiveDependencies: 첫 마운트시에만 계산
useEffect(() => {
  // ...
}, []);
```

---

## 8. Storybook 작성 규칙

UI 컴포넌트는 반드시 Storybook 스토리를 작성합니다.
스토리 파일은 컴포넌트 파일과 같은 디렉토리에 위치합니다.

```typescript
// components/ui/button/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "ui/button/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    // props
  },
};
```

### Storybook title 규칙

- 컴포넌트 디렉토리 경로를 따름
- 예: `components/ui/button/Button.tsx` → title: `"ui/button/Button"`
- 예: `components/specific/hashtag/Hashtag.tsx` → title: `"specific/hashtag/Hashtag"`

---

## 9. HTML 네이티브 태그 확장

HTML 네이티브 태그를 감싸는 컴포넌트는 반드시 해당 태그의 속성을 extend한다.

```typescript
// ✅ 네이티브 태그 확장
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

// ❌ 직접 재정의 금지
interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
}
```

- 확장 시 커스텀 props와 네이티브 props가 충돌하지 않도록 주의
- 컴포넌트 내부에서 `...rest`로 나머지 네이티브 속성 전달

```typescript
const Button = ({ variant, ...rest }: ButtonProps) => {
  return <button className={...} {...rest} />;
};
```

---

## 10. SVG 아이콘 Import

```typescript
// React 컴포넌트로 사용
import Icon from "@/assets/icons/name.svg";

// URL 문자열이 필요한 경우만
import iconUrl from "@/assets/icons/name.svg?url";
```
