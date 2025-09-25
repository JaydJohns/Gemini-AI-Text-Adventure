export interface StoryPart {
  scenario: string;
  imagePrompt: string;
  choices: string[];
}

export interface StoryState {
  scenario: string;
  imageUrl: string;
  choices: string[];
  history: string[];
}

export enum GameState {
  GENRE_SELECT,
  LOADING,
  PLAYING,
  ERROR,
}
