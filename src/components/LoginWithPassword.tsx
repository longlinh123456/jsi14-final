import {useState} from "react"
interface ILoginWithPassword {
	title: string,
	buttonText: string,
	isInLogin: boolean,
	onLinkPress: () => void
	onButtonPress: (email: string, password: string) => void
}

function LoginWithPassword(props: ILoginWithPassword) {
	const {title, buttonText, onLinkPress: onPress, isInLogin, onButtonPress} = props
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	return (
		<div>
			<form
				autoComplete="off"
				className="w-full max-w-[600px] rounded-lg bg-white p-10 shadow"
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
						placeholder="Enter your email address..."
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
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				{isInLogin &&
				<div className="mb-5 flex flex-col items-start gap-y-3">
					<label
						htmlFor="password"
						className="cursor-pointer text-sm font-medium"
					>
					Confirm Password
					</label>
					<input
						id="password"
						type="password"
						className="w-full rounded-lg border border-gray-200 bg-transparent p-4 outline-none"
						placeholder="Confirm your password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
				}
				<div className="mb-5 flex items-center justify-end text-slate-400">
					{isInLogin ?
						<><p>Don't have an account?</p>
							<p className="cursor-pointer px-2 text-blue-500 underline" onClick={onPress}>
								Sign Up
							</p>
						</> :
						<><p>Already have an account?</p>
							<p className="cursor-pointer px-2 text-blue-500 underline" onClick={onPress}>
								Log In
							</p>
						</>
					}
				</div>
				<button
					type="button"
					className="inline-flex h-[60px] w-full items-center justify-center rounded-lg bg-blue-500 px-8 py-4 font-sans font-semibold tracking-wide text-white"
					onClick={() => onButtonPress(email, password)}
				>
					{buttonText}
				</button>
			</form>
		</div>
	)
}

export default LoginWithPassword