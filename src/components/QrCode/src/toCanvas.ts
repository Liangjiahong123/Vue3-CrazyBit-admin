import { toCanvas } from "qrcode";
import { RenderQrCodeParams, QRCodeRenderersOptions } from "./type";
import { cloneDeep } from "lodash-es";

type ContentType = RenderQrCodeParams["content"];
export const customToCanvas = async (options: RenderQrCodeParams) => {
  await renderQrCode(options);
  // return drawQrCode(params);
};

async function renderQrCode(params: RenderQrCodeParams) {
  const { canvas, content, width = 0, options = {} } = params;
  const ops = cloneDeep(options);
  // 设置容错率
  ops.errorCorrectionLevel = ops.errorCorrectionLevel || getErrorCorrectionLevel(content);
  // 对不同宽度的canvas进行缩放,适配不同屏幕
  const originWidth = await getOriginWidth(content, ops);
  ops.scale = width <= 0 ? undefined : (width / originWidth) * 4;
  await toCanvas(canvas, content, ops);
  return ops;
}

// 获取原始宽度
async function getOriginWidth(content: ContentType, options: QRCodeRenderersOptions) {
  const canvasEl = document.createElement("canvas");
  await toCanvas(canvasEl, content, options);
  return canvasEl.width;
}

// 根据内容大小获取容错率
function getErrorCorrectionLevel(content: ContentType) {
  if (content.length > 36) {
    return "M";
  } else if (content.length > 16) {
    return "Q";
  } else {
    return "H";
  }
}
