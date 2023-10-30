import { ElNotification, NotificationProps } from "element-plus";

type NotifyParams = Partial<NotificationProps>;

const createNotify = (options: NotifyParams) => {
  const { duration = 3000, type = "success" } = options;
  ElNotification.closeAll();
  return ElNotification({ ...options, duration, type });
};

export const useMessage = () => {
  return {
    createNotify
  };
};
