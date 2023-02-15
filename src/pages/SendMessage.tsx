import Card from "../components/Card"
import {useUser} from "reactfire"
import Loading from "../components/Loading"

function SendMessage() {
	const {status} = useUser()
	if (status === "loading") {
		return <Loading />
	} else {
		return (
			<div className="bg-cover bg-[url('https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/330423578_1542578269555336_1337613039926565188_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEa0fYc3fnGQcVoYAEmbmBZkJ5BE9ogt9WQnkET2iC31X6b0OVNs5JZTAIhvo7WU_FrF_nyYMx4eOSc55KWbJT8&_nc_ohc=g_5p-blN1BAAX8A1i45&_nc_ht=scontent.fhan15-1.fna&oh=03_AdS7_AzbFPDIH0oNT1jm8ub_jFj2auayl8_FfBwL85D2Cg&oe=640FDFEC')] flex h-screen w-screen flex-col items-center justify-center bg-red-400">
				<Card />
			</div>
		)
	}
}

export default SendMessage