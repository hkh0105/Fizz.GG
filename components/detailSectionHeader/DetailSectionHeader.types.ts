export interface DetailSectionHeaderProps {
  color: keyof DetailHeaderColorMapper;
}

export type DetailHeaderColorMapper = {
  red: string;
  blue: string;
};
