import {useState} from "react"
import {Link} from "react-router-dom"
interface Props {
	title: string,
	buttonText: string,
	isInLogin: boolean,
	onButtonPress: (email: string, password: string) => void
}

function LoginWithPassword(props: Props) {
	const {title, buttonText, isInLogin, onButtonPress} = props
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	return (
		<div>
			<form
				autoComplete="off"
				className="w-full max-w-[600px] rounded-lg bg-white p-10 shadow-input"
				aria-label="signup-form"
			>
				<h2 className="mb-10 text-center text-3xl font-bold">{title}</h2>
				<div className="mb-5 flex flex-col items-start gap-y-3">
					<label htmlFor="email" className="cursor-pointer text-sm font-medium">
					Email
					</label>
					<input
						id="email"
						type="email"
						className="w-full rounded-lg border border-gray-200 bg-transparent p-4 outline-none"
						placeholder="Nhập địa chỉ email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-5 flex flex-col items-start gap-y-3">
					<label
						htmlFor="password"
						className="cursor-pointer text-sm font-medium"
					>
					Password
					</label>
					<input
						id="password"
						type="password"
						className="w-full rounded-lg border border-gray-200 bg-transparent p-4 outline-none"
						placeholder="Nhập mật khẩu"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				{isInLogin &&
				<div className="mb-5 flex flex-col items-start gap-y-3">
					<input
						id="confirmPassword"
						type="password"
						className="w-full rounded-lg border border-gray-200 bg-transparent p-4 outline-none"
						placeholder="Nhập lại mật khẩu"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
				}
				<div className="mb-5 flex items-center justify-end text-slate-400">
					{isInLogin ?
						<><p>Bạn chưa có tài khoản?</p>
							<Link className="text-textblue" to="/signup">Đăng ký</Link>
						</> :
						<><p>Bạn đã có tài khoản?</p>
							<Link className="text-textblue" to="/login">Đăng nhập</Link>
						</>
					}
				</div>
				<button
					type="button"
					className="inline-flex h-[60px] w-full items-center justify-center rounded-lg bg-blue-500 px-8 py-4 font-sans font-semibold tracking-wide text-white hover:bg-blue-400"
					onClick={() => {
						if (password !== confirmPassword) {
							alert("Mật khẩu được nhập lại không trùng khớp")
							return
						}
						onButtonPress(email, password)
					}
					}
				>
					{buttonText}
				</button>
			</form>
		</div>
	)
}

export default LoginWithPassword