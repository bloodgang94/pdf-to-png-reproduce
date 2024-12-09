import { test, expect } from "@playwright/test";
import { pdfToPng } from "pdf-to-png-converter";

test("has title", async ({ page }) => {
  const pngPages = await pdfToPng("./sample.pdf", {
    disableFontFace: false,
    useSystemFonts: false,
    enableXfa: false,
    viewportScale: 2.0,
    outputFolder: "output/folder",
  });
  await page.goto("file:///" + pngPages[0].path, { waitUntil: "load" });
});
