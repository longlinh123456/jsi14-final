import Navbar from "../components/Navbar"
import {useNavigate} from "react-router-dom"
import {useUser, useSigninCheck} from "reactfire"
import DashboardLink from "../components/DashboardLink"
import Inbox from "../components/Inbox"
import {useState} from "react"
import FocusedMessage from "../components/FocusedMessage"
import Loading from "../components/Loading"

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
		return <Loading />
	} else {
		if (!user.signedIn) {
			navigate("/login")
		}
		
		const inboxLink = `http://localhost:5173/sendmessage/${userData?.uid}`
		return (
			<>
				<div className="flex h-screen w-screen flex-col">
					<Navbar title="Lời chúc tết" links={navbarLinks}/>
					<div className="flex grow flex-col items-center justify-center bg-cover bg-[url('https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/330423578_1542578269555336_1337613039926565188_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEa0fYc3fnGQcVoYAEmbmBZkJ5BE9ogt9WQnkET2iC31X6b0OVNs5JZTAIhvo7WU_FrF_nyYMx4eOSc55KWbJT8&_nc_ohc=g_5p-blN1BAAX8A1i45&_nc_ht=scontent.fhan15-1.fna&oh=03_AdS7_AzbFPDIH0oNT1jm8ub_jFj2auayl8_FfBwL85D2Cg&oe=640FDFEC')]">
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