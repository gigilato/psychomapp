import { Box } from '$atoms'
import { AppointmentList } from '$features/appointment/views'
import { CalendarHeader } from '$features/calendar/views'

export default function DashboardRoute() {
  return (
    <Box className="flex-1 bg-white-classic">
      <Box className="absolute z-10 left-[0] right-[0]">
        <CalendarHeader />
      </Box>
      <AppointmentList />
    </Box>
  )
}
