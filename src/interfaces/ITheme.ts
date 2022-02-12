export interface ITheme {
  colors: {
    background: {
      primary: string;
      secondary: string;
    };
    text: {
      primary?: string;
      secondary?: string;
      success?: string;
      warning?: string;
      placeholder?: string;
    };
  };
}
