import { ElNotification, NotificationProps, ElMessage, MessageProps } from "element-plus";

type NotifyOptions = Partial<NotificationProps>;
type MessageOptions = Partial<MessageProps>;

const createNotify = (options: NotifyOptions) => {
  const { duration = 3000, type = "success" } = options;
  ElNotification.closeAll();
  ElNotification({ type, duration, ...options });
};

const createMessage = (options: MessageOptions) => {
  const { type = "success" } = options;
  ElMessage.closeAll();
  ElMessage({ type, ...options });
};

export const useMessage = () => {
  return {
    createNotify,
    createMessage
  };
};
