export interface ServiceItem {
  name: string;
  path: string;
  subItems?: ServiceSubItem[];
}

export interface ServiceSubItem {
  name: string;
  path: string;
}