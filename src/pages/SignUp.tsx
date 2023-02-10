import Navbar from "../components/Navbar"
import {useNavigate} from "react-router-dom"
import {useUser} from "reactfire"
import SignUpForm from "../components/SignUpForm"
const navbarLinks = [
	{
		display: "Trang chủ",
		navigateTo: "/"
	}
]

function SignUp() {
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
				<Navbar title="Đăng ký" links={navbarLinks}/>
				<div className="flex grow items-center justify-center bg-red-400">
					<SignUpForm />
				</div>
			</div>
		)
	}
}

export default SignUp