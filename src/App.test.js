import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("Header başarıyla render edilmeli.", () => {
  render(<Header />);
  const headerDOM = screen.getByText(/Emoji Search/i);
  expect(headerDOM).toBeInTheDocument();
});

test("Uygulama çalıştığında emoji listesi render edilmeli.", () => {
  render(<App />);
  const list = screen.getAllByText(/Click to copy emoji/i);
  const item = screen.getByText("Relaxed");
  expect(item).toBeInTheDocument();
  expect(list.length).toEqual(20);
});

test("Emoji sayfasının filterelenmesi.", () => {
  render(<App />);
  const item = screen.getByText("Yum");
  expect(item).toBeInTheDocument("Yum");
});

test("Emoji sayfasının filterelenmesi.", () => {
  render(<App />);
  const clicks = screen.getAllByTestId("row");
  expect(clicks[0]).toHaveAttribute("data-clipboard-text");
});
