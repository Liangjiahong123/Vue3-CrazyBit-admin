import type { QRCodeSegment, QRCodeRenderersOptions } from "qrcode";

export type { QRCodeRenderersOptions };

export interface RenderQrCodeParams {
  canvas: HTMLCanvasElement | HTMLImageElement;
  content: string | QRCodeSegment[];
  width?: number;
  options?: QRCodeRenderersOptions;
}
