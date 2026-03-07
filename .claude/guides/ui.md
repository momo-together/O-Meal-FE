# UI 컴포넌트 작업 가이드

## 작업 시작 전 체크

1. 이슈에 Figma node ID가 있는지 확인
2. 있으면 → Figma MCP로 디자인 조회
3. 없으면 → 첨부 이미지 + 디자인 시스템 기반으로 UI 구성

---

## Figma MCP 활용

이슈에 명시된 Figma URL 형식:

```
https://figma.com/design/:fileKey/:fileName?node-id=:nodeId
```

순서:

1. `get_design_context`로 디자인 정보 추출
2. `get_variable_defs`로 색상/폰트 등 디자인 변수 확인
3. `get_screenshot`으로 시각적 확인 (필요 시)
4. 프로젝트 디자인 토큰(`globals.css`)과 매핑하여 구현

Figma MCP 연결이 실패하면 이미지와 디자인 시스템 기반으로 적절한 UI를 알아서 구성할 것.

---

## 컴포넌트 구현 규칙

### 파일 구조

```
components/
  componentName/         # camelCase
    ComponentName.tsx    # PascalCase
    ComponentName.stories.tsx
    ComponentName.test.tsx  # 도메인 로직이 있을 경우
```

### 컴포넌트 템플릿

```typescript
interface ComponentNameProps {
  /** Props 설명 */
  propName: string;
  optionalProp?: boolean;
}

const ComponentName = ({
  propName,
  optionalProp = false,
}: ComponentNameProps) => {
  return <div className="...">{/* 내용 */}</div>;
};

export default ComponentName;
```

### 스타일링

- Tailwind CSS 유틸리티 클래스 사용
- variant가 있는 경우 `cva` 사용
- 조건부 스타일링은 `clsx` 사용
- 디자인 토큰 우선 활용 (`primary-point`, `typo-body1` 등)
- Tailwind v4 문법(`@utility`, `@theme inline`)으로 개선 가능한 부분이 있다면 PR에 제안할 것

### 접근성 (필수)

- `aria-label`, `aria-hidden` 적극 활용
- `tabIndex`로 키보드 네비게이션 지원
- `role` 속성으로 의미론적 역할 명시

---

## Storybook

모든 컴포넌트는 `.stories.tsx` 파일을 반드시 함께 작성한다.

```typescript
// ComponentName.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs";
import ComponentName from "./ComponentName";

const meta: Meta<typeof ComponentName> = {
  title: "components/componentName/ComponentName",
  component: ComponentName,
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

export const Default: Story = {
  args: {
    // 기본 props
  },
};
```

---

### HTML 네이티브 태그 확장

HTML 네이티브 태그를 감싸는 컴포넌트는 반드시 해당 태그의 속성을 extend한다.

```typescript
// ✅ 네이티브 태그 확장
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

// ❌ 직접 재정의 금지
interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
}
```

- 확장 시 커스텀 props와 네이티브 props가 충돌하지 않도록 주의
- 컴포넌트 내부에서 `...rest`로 나머지 네이티브 속성을 전달할 것

```typescript
const Button = ({ variant, ...rest }: ButtonProps) => {
  return <button className={...} {...rest} />;
};
```

---

## PR 작성 시 포함할 내용

- 구현한 컴포넌트 목록
- Figma 대비 의도적으로 다르게 구현한 부분이 있다면 이유 명시
- 접근성 처리 방식
- Tailwind v4 문법 활용 여부
