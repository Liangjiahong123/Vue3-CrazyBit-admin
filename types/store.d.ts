import { RoleInfo } from "@/api/sys/types/userType";

export interface UserInfo {
  userId: string | number;
  username: string;
  realName: string;
  avatar: string;
  roles: RoleInfo[];
  desc?: string;
  homePath?: string;
}
