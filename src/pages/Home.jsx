import Box  from "@mui/material/Box"
import Room from "../components/Room";

export default function Home() {
    return (
        <Box>
            <div>
                Hello
            </div>
            <Box>
                왜 안됨?
            </Box>
            <Box
  sx={{
    width: 300,
    height: 300,
    backgroundColor: 'primary.dark',
    '&:hover': {
      backgroundColor: 'primary.main',
      opacity: [0.9, 0.8, 0.7],
    },
  }}
/>
            <Room />

        </Box>
    )
}