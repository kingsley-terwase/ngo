import { Box, Typography } from '@mui/material'
import StatsSection from '../../../Components/StatSection'
// import VideoBanner from '../../../Components/Video'
import ProgramsSection from '../../../Components/ProgramsSection'
import AboutUs from '../../../Components/About'
import Volunteer from '../../../Components/Volunteer'
import DonateSection from '../../../Components/DonateSection'
import DonateSec from '../../../Components/DonateSec'


const HomePage = () => {
  return (
    <>
      <Box>
        <AboutUs />
        <StatsSection />
        <DonateSec/>
        <ProgramsSection />
        <Volunteer />
        <DonateSection />
        {/* <VideoBanner /> */}
      </Box>
    </>
  )
}

export default HomePage
