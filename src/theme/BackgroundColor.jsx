import { useThemeContext } from "../context/theme-context";


const BackgroundColor = ({ className, onClick }) => {
  const {themeHandler} = useThemeContext()
    return (
      <button className={className} onClick={() => themeHandler(className)}></button>
    );
  };
  
  export default BackgroundColor;
  