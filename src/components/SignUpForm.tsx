import {createUserWithEmailAndPassword} from "firebase/auth"
import {useAuth} from "reactfire"
import LoginWithPassword from "./LoginWithPassword"

function SignUpForm() {
	const auth = useAuth()
	const handleSignUp = async(email: string, password: string) => {
		console.log("haha", email, password)
		try {
			await createUserWithEmailAndPassword(auth, email, password)
		} catch (error: any) {
			alert(error.code)
		}

	}
	const showAlert = () => {
		alert("called function")
	}
	return (
		<div className="mx-auto flex w-screen flex-1 flex-row items-center justify-center gap-x-5 bg-yellow-600 py-4">
			<div className="w-2/5">
				<LoginWithPassword title="Sign Up" buttonText="Sign Up" onLinkPress={showAlert} isInLogin={false} onButtonPress={handleSignUp}/>
			</div>
		</div>
	)
}

export default SignUpForm