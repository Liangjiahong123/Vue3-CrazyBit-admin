import { toCanvas } from "qrcode";
import { IRenderQrCodeParams } from "./type";

export const renderQrCode = (params: IRenderQrCodeParams) => {
  const { canvas, content, options = {} } = params;

  return toCanvas(canvas, content, options);
};
