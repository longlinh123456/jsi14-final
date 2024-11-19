import {addDoc, collection} from "firebase/firestore"
import {useNavigate, useParams} from "react-router-dom"
import {useFirestore} from "reactfire"
import {useState} from "react"

function Card() {
	const params = useParams()
	const targetUid = params.uid
	const navigate = useNavigate()
	const db = useFirestore()
	const [content, setContent] = useState("")
	if (!targetUid) {
		navigate("/")
	}

	async function SendMessage() {
		const messagesRef = collection(db, "users", targetUid as string, "inbox")
		await addDoc(messagesRef, {
			content: content,
			alreadyRead: false
		})
		alert("Gửi lời chúc thành công!")
		navigate("/")
	}
	return (<>
		<form
			autoComplete="off"
			className="flex h-1/3 w-2/5 flex-col items-center justify-center gap-y-3 rounded-lg bg-white px-10 py-3 shadow-input"
			aria-label="signup-form"
			onSubmit={(e) => {
				e.preventDefault()
				SendMessage()
			}}>
			<label htmlFor="email" className="cursor-pointer text-sm font-medium">
                Gửi thiệp chúc Tết (giới hạn 200 ký tự)
			</label>
			<textarea
				rows={14}
				cols={10}
				wrap="soft"
				className="w-full resize-none rounded-lg border border-gray-200 bg-transparent p-1 text-center outline-none"
				placeholder="Nhập lời chúc"
				onChange={(e) => setContent(e.target.value)}
				maxLength={200}
				required={true}
			/>
			<button
				type="submit"
				className="inline-flex h-[50px] w-full items-center justify-center rounded-lg bg-blue-500 px-8 py-4 font-sans font-semibold tracking-wide text-white hover:bg-blue-400"
			>
                Gửi
			</button>
		</form>
	</>

	)
}

export default Card