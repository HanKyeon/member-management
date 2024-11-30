export interface AppBarProps {
  /**
   * 앱바 title
   */
  title?: string;
  /**
   * 앱바 우측 버튼 text
   */
  buttonText: string;
  /**
   * 앱바 우측 버튼 clickHandler
   */
  buttonClick: () => void;
}
