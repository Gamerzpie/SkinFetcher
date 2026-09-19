/**
 * One-click client-side image downloader.
 * Fetches the image as a blob to trigger a genuine file download prompt
 * without navigating away or opening an external preview tab.
 * Falls back to /api/download proxy if direct fetch is blocked.
 */
export async function downloadImage(url: string, filename: string): Promise<boolean> {
  const safeFilename = filename.endsWith(".png") ? filename : `${filename}.png`;

  try {
    const res = await fetch(url, { mode: "cors" });
    if (res.ok) {
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = safeFilename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(objectUrl), 2000);
      return true;
    }
  } catch (error) {
    console.warn("Direct blob download failed, falling back to proxy:", error);
  }

  // Direct server proxy fallback with Content-Disposition: attachment
  const proxyUrl = `/api/download?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(safeFilename)}`;
  const link = document.createElement("a");
  link.href = proxyUrl;
  link.download = safeFilename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  return true;
}
