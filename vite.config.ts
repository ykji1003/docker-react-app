import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    host: "0.0.0.0",
  },
  plugins: [react()],
  test: {
    globals: true, // `expect`, `test`, `vi` 등 글로벌 함수 활성화
    environment: "jsdom", // jsdom은 Node.js 환경에서 HTML, CSS, JavaScript를 테스트할 때 브라우저와 유사한 DOM 구조를 제공
    setupFiles: "./src/setupTests.ts", // 이 파일을 만들고 설정을 추가합니다.
  },
});
