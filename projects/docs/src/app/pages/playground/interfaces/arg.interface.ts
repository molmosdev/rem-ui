export interface IArg {
  label: string;
  type: string;
  value: any;
  options?: { label: string; value: any }[];
  hidden?: boolean;
}
