export interface NavItem{
  id?: number;
  link: string;
  text: string;
  label: string;
  value: string;
  children?: NavItem[];
}
