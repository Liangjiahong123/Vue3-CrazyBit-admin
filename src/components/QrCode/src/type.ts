import type { QRCodeSegment, QRCodeRenderersOptions } from "qrcode";

export interface IRenderQrCodeParams {
  canvas: HTMLCanvasElement | HTMLImageElement;
  content: string | QRCodeSegment[];
  options?: QRCodeRenderersOptions;
}
