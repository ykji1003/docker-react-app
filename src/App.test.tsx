import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders the app with Vite and React logos", () => {
    render(<App />);

    // Vite 로고가 화면에 표시되는지 확인
    const viteLogo = screen.getByAltText(/Vite logo/i);
    expect(viteLogo).toBeInTheDocument();

    // React 로고가 화면에 표시되는지 확인
    const reactLogo = screen.getByAltText(/React logo/i);
    expect(reactLogo).toBeInTheDocument();

    // 제목이 올바르게 표시되는지 확인
    const heading = screen.getByText(/Vite \+ React/i);
    expect(heading).toBeInTheDocument();
  });

  test("increments count on button click", () => {
    render(<App />);

    // 버튼 요소를 가져옵니다
    const button = screen.getByRole("button");

    // 초기 count 확인
    expect(button).toHaveTextContent("count is 0");

    // 버튼을 클릭해서 count를 증가시킵니다
    fireEvent.click(button);

    // 업데이트된 count 확인
    expect(button).toHaveTextContent("count is 1");
  });

  test("increments count on button click", () => {
    render(<App />);

    // 버튼 요소를 가져옵니다
    const button = screen.getByRole("button");

    // 초기 count 확인
    expect(button).toHaveTextContent("count is 0");

    // 버튼을 클릭해서 count를 증가시킵니다
    fireEvent.click(button);

    // 업데이트된 count 확인
    expect(button).toHaveTextContent("count is 1");
  });
});
