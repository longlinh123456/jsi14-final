import Navbar from "../components/Navbar"
import {useNavigate} from "react-router-dom"
import {useUser, useSigninCheck} from "reactfire"
import DashboardLink from "../components/DashboardLink"
import Inbox from "../components/Inbox"
import {useState} from "react"
import FocusedMessage from "../components/FocusedMessage"

const navbarLinks = [
	{
		display: "Trang chủ",
		navigateTo: "/"
	}
]

function Dashboard() {
	const navigate = useNavigate()
	const {status, data: user} = useSigninCheck()
	const userData = useUser().data
	const [displayedMessage, setDisplayedMessage] = useState("")

	if (status === "loading") {
		return <div
			aria-label="loading-skeleton"
			className="h-full w-full animate-pulse bg-slate-200"
		></div>
	} else {
		if (!user.signedIn) {
			navigate("/login")
		}
		
		const inboxLink = `https://localhost:5173/inbox/${userData?.uid}`
		return (
			<>
				<div className="flex h-screen w-screen flex-col">
					<Navbar title="Lời chúc tết" links={navbarLinks}/>
					<div className="flex grow flex-col items-center justify-center bg-red-400">
						<DashboardLink inboxLink={inboxLink} />
						<Inbox setMessage={setDisplayedMessage}/>
						{(displayedMessage !== "") && <FocusedMessage message={displayedMessage} setMessage={setDisplayedMessage}/>}
					</div>
				</div>
			</>
		)
	}
}

export default Dashboard