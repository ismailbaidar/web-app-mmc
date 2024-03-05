import Calendar from "./Calendar"
import "../assets/styles/dashboard.css"
import DashboardEventCard from "../components/DashboardEventCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendar,
  faCalendarPlus,
  faCheck,
  faCheckDouble,
  faCheckToSlot,
  faClock,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons"
import DashboardEventEvent from "../components/DashboardEventTable"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setAdminCurrentPage, setPaths } from "../Features/AdminNavigationSlice"
import {
  getAllEvents,
  getThisMonthEventDates,
  getThisWeekEvents,
} from "../Features/EventSlice"
import { getCountUser } from "../Features/AuthSlice"
import { getAllSession } from "../Features/SessionSlice"
export default function Dashboard() {
  const events = useSelector((state) => state.EventReducer.events)
  const [countUserState, setCountUserState] = useState(0)
  const countUser = useSelector((state) => state.AuthReducer.countUser)
  const thisWeekEvents = useSelector((state) => state.EventReducer.weekEvents)
  const sessions = useSelector((state) => state.SessionReducer.sessions)
  const dispatch = useDispatch()

  const date = new Date()
  useEffect(() => {
    dispatch(getAllEvents())
    dispatch(getCountUser())
    dispatch(getThisWeekEvents())
    dispatch(getAllSession())
  }, [])

  useEffect(() => {
    dispatch(setPaths(["Dashboard"]))
    dispatch(setAdminCurrentPage("dashboard"))
  }, [])
  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <div className="cards">
          <DashboardEventCard
            stat={events?.length}
            name="Total Event"
            icon={<FontAwesomeIcon icon={faCalendar} />}
          />
          <DashboardEventCard
            stat={countUser}
            name="Total Registration"
            icon={<FontAwesomeIcon icon={faUserPlus} />}
          />
          <DashboardEventCard
            stat={thisWeekEvents?.length}
            name="This Week Events"
            icon={<FontAwesomeIcon icon={faCalendarPlus} />}
          />
          <DashboardEventCard
            stat={sessions?.length}
            name="Total Sessions"
            icon={<FontAwesomeIcon icon={faClock} />}
          />
        </div>
        <Calendar />
      </div>
      <DashboardEventEvent />
    </div>
  )
}
