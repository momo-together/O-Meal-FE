# 작업 시작 가이드

## 1. 이슈 확인

작업 시작 전 이슈에서 아래 항목을 확인한다.

- 작업 유형 (UI/컴포넌트, 기능 구현, 버그 수정)
- AI 작업 범위 (코드 생성만 / 코드 + 테스트 / 코드 + 테스트 + 스토리북)
- 완료 조건
- 참고 사항

작업 유형에 따라 해당 가이드 문서를 반드시 읽는다.

| 작업 유형        | 가이드 문서                      |
| ---------------- | -------------------------------- |
| UI/컴포넌트 구현 | `.claude/guides/ui-component.md` |
| 기능 구현        | `.claude/guides/feature.md`      |

---

## 2. 브랜치 생성

```
type/#이슈번호-간단한-설명
```

type 종류:

- `feature`: 기능 추가
- `fix`: 버그 수정
- `refactor`: 리팩토링
- `chore`: 설정, 의존성 등
- `docs`: 문서

예시:

```
feature/#12-filter-component
fix/#34-like-button-duplicate
```

### 규칙

- develop 브랜치에서 분기할 것
- 브랜치 생성 전 develop을 최신 상태로 pull할 것
- main 브랜치 직접 push 금지

---

## 3. 환경 확인

```bash
pnpm install       # 의존성 설치
pnpm build         # 빌드 확인
```

빌드가 깨진 상태라면 작업 시작 전에 원인을 파악하고 이슈에 코멘트로 남긴다.
