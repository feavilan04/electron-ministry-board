import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./Register";

jest.mock("@react-pdf/renderer", () => ({
  Page: () => null,
  Text: () => null,
  View: () => null,
  Document: () => null,
  StyleSheet: () => null,
  PDFDownloadLink: () => null,
  PDFViewer: () => null,
}));

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn react/i);
  expect(linkElement).toBeInTheDocument();
});
