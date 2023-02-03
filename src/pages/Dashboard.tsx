import Navbar from "../components/Navbar"
import {useNavigate} from "react-router-dom"
import {useUser, useFirebaseApp} from "reactfire"
import DashboardLink from "../components/DashboardLink"
import Inbox from "../components/Inbox"
import {useState} from "react"

const navbarLinks = [
	{
		display: "Trang chủ",
		navigateTo: "/"
	}
]

function Dashboard() {
	const navigate = useNavigate()
	const {status, data: user} = useUser()
	// const messages = usecoll
	// const {displayedLetter, setDisplayedLetter} = useState<string>()

	if (status === "loading") {
		return <div
			aria-label="loading-skeleton"
			className="h-full w-full animate-pulse bg-slate-200"
		></div>
	} else {
		if (!user) {
			navigate("/login")
		}
		const inboxLink = `https://localhost:5173/inbox/${user?.uid}`
		return (
			<>
				<div className="flex h-screen w-screen flex-col">
					<Navbar title="Lời chúc tết" links={navbarLinks}/>
					<div className="flex grow flex-col items-center justify-center bg-red-400">
						<DashboardLink inboxLink={inboxLink} />
						<Inbox />
					</div>
					{/* <div className="absolute h-full w-full bg-black opacity-75">
						
					</div> */}
				</div>
			</>
		)
	}
}

export default Dashboard