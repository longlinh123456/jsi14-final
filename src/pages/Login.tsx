import LoginForm from "../components/LoginForm"
import Navbar from "../components/Navbar"
import {useNavigate} from "react-router-dom"
import {useUser} from "reactfire"
const navbarLinks = [
	{
		display: "Trang chủ",
		navigateTo: "/"
	}
]

function Login() {
	const navigate = useNavigate()
	const {status, data: user} = useUser()
	if (status === "loading") {
		return <div
			aria-label="loading-skeleton"
			className="size-full animate-pulse bg-slate-200"
		></div>
	} else {
		if (user) {
			navigate("/dashboard")
		}
		return (
			<div className="flex h-screen w-screen flex-col">
				<Navbar title="Đăng nhập" links={navbarLinks}/>
				<div className="flex grow items-center justify-center bg-red-400">
					<LoginForm />
				</div>
			</div>
		)
	}
}

export default Login