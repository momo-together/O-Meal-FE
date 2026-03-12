---
description: GitHub 이슈 기반 자동 작업 수행 (브랜치 생성, 코드 작성, PR 생성)
allowed-tools: Bash, Read, Write, Edit, Glob, Grep, Agent, TodoWrite, WebFetch
---

다음 지침에 따라 GitHub 이슈 기반 자동 작업을 수행한다.

## 사용법

```
/auto-work <이슈번호>
```

예시: `/auto-work 20`

---

## 실행 순서

### 1단계: 이슈 조회

`gh issue view <이슈번호>` 명령으로 이슈를 조회한다.

- 이슈를 찾을 수 없거나 오류가 발생하면 **즉시 작업을 중단**하고 사용자에게 오류 내용을 알린다.
- 이슈에서 아래 항목을 파악한다:
  - 작업 유형 (UI/컴포넌트, 기능 구현, 버그 수정)
  - 완료 조건
  - 참고 사항 (Figma URL, 첨부 이미지 등)

### 2단계: init.md 읽기 (필수)

`.claude/guides/init.md`를 **반드시 먼저 읽는다.**

init.md의 지침에 따라 아래를 수행한다:
- 작업 유형에 맞는 가이드 문서 확인
- init.md에 명시된 브랜치 형식과 규칙을 따라 브랜치를 생성한다.
- 환경 확인 (`pnpm install`, `pnpm build`)
  - 빌드가 깨진 상태라면 즉시 중단하고 사용자에게 알린다.

### 3단계: 작업 유형별 가이드 읽기

이슈의 작업 유형에 따라 아래 가이드를 읽고 지침을 따른다.

| 작업 유형        | 가이드 문서                 |
| ---------------- | --------------------------- |
| UI/컴포넌트 구현 | `.claude/guides/ui.md`      |
| 기능 구현        | `.claude/guides/feature.md` |

### 4단계: 작업 수행

해당 가이드의 지침에 따라 코드를 작성한다.
- 작업 중 오류나 불명확한 부분이 있으면 즉시 중단하고 사용자에게 알린다.
- 완료 조건을 모두 충족하면 다음 단계로 넘어간다.

### 5단계: 스토리북 배포 (스토리북을 작성한 경우에만)

4단계에서 `.stories.tsx` 파일을 작성했다면 아래를 수행한다.

1. **빌드 검증**: `pnpm build-storybook` 명령으로 스토리북 빌드가 성공하는지 확인한다.
   - 빌드 실패 시 즉시 중단하고 사용자에게 오류 내용을 알린다.
2. **Chromatic 배포**: `npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN` 명령으로 배포한다.
   - `CHROMATIC_PROJECT_TOKEN` 환경변수가 없으면 배포를 건너뛰고 PR 본문에 "Chromatic 미배포 (토큰 없음)" 을 명시한다.
   - 배포 성공 시 Chromatic에서 반환된 스토리북 URL을 다음 단계 PR 본문에 포함한다.

### 6단계: PR 생성

`.claude/guides/pr.md`를 **반드시 읽은 후** PR을 생성한다.

- pr.md에 명시된 PR 제목 형식과 규칙을 따른다.
- 작업 유형별 PR 본문 추가 항목은 pr.md에서 참조한 각 가이드의 'PR 작성 시 포함할 내용' 섹션을 따른다.
- PR은 develop 브랜치를 base로 생성한다.
- `gh pr create` 명령으로 PR을 생성한다.
- 5단계에서 Chromatic 배포를 완료했다면 PR 본문에 스토리북 URL을 포함한다.
