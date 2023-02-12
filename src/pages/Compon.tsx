import Card from "../components/Card"
import {useNavigate} from "react-router-dom"
import {useUser} from "reactfire"

function Compon() {
	const navigate = useNavigate()
	const {status, data: user} = useUser()
	if (status === "loading") {
		return <div
			aria-label="loading-skeleton"
			className="h-full w-full animate-pulse bg-slate-200"
		></div>
	} else {
		if (user) {
			navigate("/dashboard")
		}
		return (
			<div className="flex h-screen w-screen flex-col">
				<div className="flex grow items-center justify-center bg-red-400">
					<Card />
				</div>
			</div>
		)
	}
}

export default Compon