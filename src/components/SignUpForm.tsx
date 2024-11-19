import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {useAuth} from "reactfire"
import LoginWithPassword from "./LoginWithPassword"

const provider = new GoogleAuthProvider()

function SignUpForm() {
	const auth = useAuth()
	async function handleGoogleLogin() {
		await signInWithPopup(auth, provider)
	}
	const handleSignUp = async(email: string, password: string) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password)
		} catch (error: any) {
			alert(`Đăng ký thất bại, lỗi: ${error.code}`)
		}

	}
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex w-screen flex-1 flex-row items-center justify-center gap-x-5 py-4">
				<div className="w-2/5">
					<LoginWithPassword title="Đăng ký" buttonText="Tạo tài khoản" isInLogin={false} onButtonPress={handleSignUp}/>
				</div>
			</div>
			<div onClick={handleGoogleLogin} className="flex h-[75px] cursor-pointer flex-row items-center justify-center gap-x-3 rounded-lg bg-blue-400 px-5 font-sans text-lg font-semibold tracking-wide text-white hover:bg-blue-300">
				<svg className="h-3/5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
					<path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4" />
					<path d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z" fill="#34A853" />
					<path d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z" fill="#FBBC05" />
					<path d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z" fill="#EB4335" />
				</svg>
				<h2>Đăng nhập với Google</h2>
			</div>
		</div>
	)
}

export default SignUpForm