# Careerfy Admin

Figma의 전체 구성원 화면을 React + TypeScript, Tailwind CSS v4, shadcn 스타일의 Radix UI 컴포넌트, Lucide 아이콘으로 구현했습니다.

## 실행

```sh
pnpm install
pnpm dev
```

http://localhost:5173

## 빌드

```sh
pnpm build
```

검색, 활동/앱 연동 필터, 전화번호 확인 필터, 탭, 구성원 프로필, 직접 추가, CSV 업로드, 가입 코드 복사, 사이드바 접기를 지원합니다.

백엔드 연결 전의 샘플 데이터이며 새로고침 시 초기화됩니다. 업로드는 첫 행이 `이름,이메일,전화번호`인 단순 CSV를 지원합니다. .xlsx 파일과 다른 메뉴 화면은 구현 범위에 포함되지 않습니다. 페이지 표시는 Figma 원본을 재현한 데모입니다.
