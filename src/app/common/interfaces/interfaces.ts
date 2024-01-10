export interface BoardDetails {
  boards: Board[];
}

export interface Board {
  name: string;
  url: string;
}

export interface BoardInfo {
  left: string[] | undefined;
  right: string[] | undefined;
  section: BoardSection[] | undefined;
  error: string | undefined;
}

export interface BoardSection {
  name: string;
  url: string;
  items: Item[];
}

export interface Item {
  name: string;
  Action: string;
}
