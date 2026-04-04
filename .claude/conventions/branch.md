# 브랜치 네이밍 컨벤션

## 형식

```
type/#이슈번호-간단한-설명
```

## type 종류

| type | 사용 기준 |
|------|-----------|
| `feature` | 기능 추가 |
| `fix` | 버그 수정 |
| `refactor` | 리팩토링 |
| `chore` | 설정, 의존성 등 |
| `docs` | 문서 |

## 예시

```
feature/#12-filter-component
fix/#34-like-button-duplicate
```

## 규칙

- `develop` 브랜치에서 분기
- 브랜치 생성 전 develop을 최신 상태로 pull
- `main` 브랜치 직접 push 금지
