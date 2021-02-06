import React from "react";
import { Document, Page } from "react-pdf";

import cv from "../assets/images/Lebenslauf_Maria_Isabel_da_Costa_Carvalho.pdf";

export default function Curriculum() {
  return (
    <Document file={cv}>
      <Page pageNumber={1} />
      <Page pageNumber={2} />
    </Document>
  );
}
