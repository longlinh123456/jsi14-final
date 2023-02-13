import LoginForm from "../components/LoginForm"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"
import { useUser } from "reactfire"
import LandingPage from "../components/LandingPage"
const navbarLinks = [
	{
		display: "Trang chủ",
		navigateTo: "/"
	}
]

function Landing() {
	const navigate = useNavigate()
	const { status, data: user } = useUser()
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
			<div>
				<div className="flex flex-col bg-red-300">
					<LandingPage title="Đăng nhập" links={navbarLinks} />
					<div className="text-center tracking-widest">
						<p className="text-3xl mt-16 text-textyellow font-medium">CÁC BƯỚC ĐỂ NHẬN</p>
						<p className="text-5xl mt-4 text-red-600 font-semibold">THIỆP CHÚC TẾT</p>
						<br></br>
						<hr className="max-w-4xl m-auto h-px bg-gray-200 border-0 dark:bg-black"></hr>
					</div>
					<div className="w-4/5 mx-auto">
						<br></br><br></br>
						<p className="text-3xl pb-2">1. Đăng Ký/Đăng Nhập Tài Khoản</p>
						<p className="text-2xl">Đầu tiên các bạn cần đăng ký/đăng nhập tài khoản bên trên phía phải của trang web để sử dụng dịch vụ.</p>
						<br></br>
						<img className="w-4/6 mx-auto rounded-2xl border-black border-1" src="https://scontent-sin6-4.xx.fbcdn.net/v/t1.15752-9/330959480_1196573687913131_4876886365461415624_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHpXJYb8OMRqAN3RHwYebvVGa2vwYZgxbkZra_BhmDFuV0SNjycv5Gf-XzmWCEYYqJ5V5LEIw6c1sv_TtcPJ4Q9&_nc_ohc=iaPSl-LlU80AX_TSuX_&_nc_ht=scontent-sin6-4.xx&oh=03_AdQBoIywNs6NvDiJE0eon_q59uSAMB2xiKH4pO33nezNoA&oe=6411BC65"></img>
						<br></br>
						<p className="text-3xl pb-2">2. Lấy Link Từ Trang Dashboard</p>
						<p className="text-2xl">Sau đó các bạn vào trang Dashboard và ấn vào nút màu xanh để sao chép link</p>
						<br></br>
						<img className="w-4/6 mx-auto rounded-2xl border-black border-1" src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/330293853_1309521456557337_1837142484630922710_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH8DsRxeG7pxbmc_3jyyEdgRdC-1jkQIc1F0L7WORAhzQtudhm5N6YIT0qsrKpEgAL8iRChvy2D1UgchpmYe1fk&_nc_ohc=XUrEf6beu-AAX_qoAmT&_nc_ht=scontent.fhan5-10.fna&oh=03_AdRsZlITCKfOVQd_v14qrGJymgpnlPR6HrVAuLSrz5imjA&oe=6411B324"></img>
						<br></br>
						<p className="text-3xl pb-2">3. Đăng Link Lên Mạng Xã Hội</p>
						<p className="text-2xl">Cuối cùng các bạn chỉ cần đăng tải đường link lên trang mạng xã hội và kêu gọi người vào gửi lời chúc Tết. Như vậy là hoàn thành, chúc các bạn thành công.</p>
						<br></br>
						<img className="w-4/6 mx-auto rounded-2xl border-black border-1" src="https://scontent.fhan5-9.fna.fbcdn.net/v/t1.15752-9/330660726_3548118775421366_3585495675821649332_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHcw4F6qHFFZH7o1KWmU7Ur2n7LJxJ5RwXafssnEnlHBUxWwF_Sxrm-u4WN9jlmU-E-3M-AF39n0AUKwWGXLer0&_nc_ohc=nFWHH5S6NfcAX-D6g3M&_nc_ht=scontent.fhan5-9.fna&oh=03_AdR0m2hcSHugoBsMgUwEaWdhaVH-Fs2DRxUTRqa9fjT2SQ&oe=6411CC9D"></img>
						<br></br><br></br><br></br>
					</div>
				</div>
			</div>
		)
	}
}

export default Landing