export enum SUBJECT_MAPPER {
  Math = "คณิต",
  Physics = "ฟิสิกส์",
  Chemistry = "เคมี",
  Biology = "ชีววิทยา",
}

export enum SUBJECT_COLOR_MAPPER {
  Math = "#9affd8",
  Physics = "#c6c5ed",
  Chemistry = "#92e994",
  Biology = "#ff86c6",
}

export function getSubjectColor(subject: string) {
  return SUBJECT_COLOR_MAPPER[subject as keyof typeof SUBJECT_COLOR_MAPPER];
}

export function getSubjectName(subject: string) {
  return SUBJECT_MAPPER[subject as keyof typeof SUBJECT_MAPPER];
}
