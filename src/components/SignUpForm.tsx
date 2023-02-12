import {createUserWithEmailAndPassword} from "firebase/auth"
import {useAuth} from "reactfire"
import LoginWithPassword from "./LoginWithPassword"

function SignUpForm() {
	const auth = useAuth()
	const handleSignUp = async(email: string, password: string) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password)
		} catch (error: any) {
			alert(error.code)
		}

	}
	return (
		<div className="mx-auto flex w-screen flex-1 flex-row items-center justify-center gap-x-5 py-4">
			<div className="w-2/5">
				<LoginWithPassword title="Đăng ký" buttonText="Tạo tài khoản" isInLogin={false} onButtonPress={handleSignUp}/>
			</div>
		</div>
	)
}

export default SignUpForm