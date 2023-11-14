export type DropDownTrigger = "click" | "hover" | "contextmenu";

export interface DropDownMenu {
  command: string;
  text: string;
  disabled?: boolean;
  divider?: boolean;
}
