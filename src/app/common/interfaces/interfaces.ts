export interface Boards {
  boards: Board[];
}

export interface Board {
  name: string;
  url:  string;
}

export interface BoardInfo {
  sections: Sections;
  section:  Section;
}

export interface Section {
  name:  string;
  url:   string;
  items: Item[];
}

export interface Item {
  name:   string;
  Action: string;
}

export interface Sections {
  left:  string[];
  right: string[];
}
