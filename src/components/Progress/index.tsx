import { LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const Progress = styled(LinearProgress)({
  backgroundColor: "#ffffff",
  "& .MuiLinearProgress-bar": {
    animationDuration: "3s",
    backgroundColor: "#fdbb30",
  },
});

export default Progress;
