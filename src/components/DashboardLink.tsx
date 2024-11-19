import {useState} from "react"
export interface Props {
	inboxLink: string
}

function DashboardLink({inboxLink}: Props) {
	const [copied, setCopied] = useState(false)
	return (
		<div className="my-2 flex h-[5%] w-1/2 items-center justify-center rounded-md border-0.5 border-black bg-white">
			<span>
				Link hộp thư chúc Tết:
			</span>
			<span>
				<button onClick={() => {
					navigator.clipboard.writeText(inboxLink)
					if (!copied) {
						setCopied(true)
						setTimeout(() => {
							setCopied(false)
						}, 1000)
					}
				}
				} type="button" className="mx-2 inline-flex h-4/5 items-center justify-center rounded-lg bg-blue-500 p-1 font-sans font-semibold tracking-wide text-white hover:bg-blue-400">
					{copied ? "Đã sao chép" : "Sao chép link"}
				</button>
			</span>
		</div>	
	)
}

export default DashboardLink