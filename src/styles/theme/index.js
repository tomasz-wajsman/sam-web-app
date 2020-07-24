import { createMuiTheme } from "@material-ui/core";
import { yellow, orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: yellow
  },
  spacing: '10px'
});
export default theme;
