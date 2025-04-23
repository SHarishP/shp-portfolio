export interface DarkModeProps {
  isDarkMode: boolean;
}

export interface NavbarDarkProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
