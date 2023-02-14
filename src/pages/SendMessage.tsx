import Card from "../components/Card"
import {useUser} from "reactfire"
import Loading from "../components/Loading"

function SendMessage() {
	const {status} = useUser()
	if (status === "loading") {
		return <Loading />
	} else {
		return (
			<div className="flex h-screen w-screen flex-col items-center justify-center bg-red-400">
				<Card />
			</div>
		)
	}
}

export default SendMessage