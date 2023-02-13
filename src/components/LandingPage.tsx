import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "reactfire"

type NavbarLink = {
    display: string
    navigateTo: string
}

interface Props {
    title: string
    links?: NavbarLink[]
}

function LandingPage({ title, links = [] }: Props) {
    const navigate = useNavigate()
    const auth = useAuth()
    async function handleButton() {
        if (auth.currentUser) {
            await auth.signOut()
        }
        navigate("/")
    }
    return (
        <div className="flex h-[85px] items-center justify-between bg-red-500 border-b-1 border-black">
            <svg className="absolute left-0 top-0 h-[55px] w-[55px]" xmlns="http://www.w3.org/2000/svg" viewBox="208.949 442.304 371.339 371.338">
                <path fillRule="evenodd" clipRule="evenodd" fill="#facc15" d="M 240.604 473.959 L 240.604 456.913 L 223.559 456.913 L 223.559 473.959 L 240.604 473.959 Z M 272.26 488.569 L 255.215 488.569 L 255.215 505.615 L 272.26 505.615 L 272.26 488.569 Z M 272.26 537.269 L 272.26 520.224 L 255.215 520.224 L 255.215 537.269 L 272.26 537.269 Z M 303.915 488.569 L 286.869 488.569 L 286.869 505.615 L 303.915 505.615 L 303.915 488.569 Z M 208.949 442.304 L 223.559 442.304 L 240.604 442.304 L 255.215 442.304 L 255.215 456.913 L 255.215 473.959 L 272.26 473.959 L 272.26 456.913 L 272.26 442.304 L 286.869 442.304 L 327.048 442.304 L 327.048 456.913 L 286.869 456.913 L 286.869 473.959 L 303.915 473.959 L 318.524 473.959 L 318.524 488.569 L 318.524 505.615 L 318.524 520.224 L 303.915 520.224 L 286.869 520.224 L 286.869 537.269 L 286.869 551.879 L 272.26 551.879 L 255.215 551.879 L 240.604 551.879 L 240.604 537.269 L 240.604 520.224 L 223.559 520.224 L 223.559 560.402 L 208.949 560.402 L 208.949 520.224 L 208.949 505.615 L 223.559 505.615 L 240.604 505.615 L 240.604 488.569 L 223.559 488.569 L 208.949 488.569 L 208.949 473.959 L 208.949 456.913 L 208.949 442.304 L 208.949 442.304 Z" />
                <polygon fillRule="evenodd" clipRule="evenodd" fill="#facc15" points="208.949 615.189 208.949 600.579 208.949 560.402 223.559 560.402 223.559 600.579 240.604 600.579 240.604 583.535 240.604 568.924 255.215 568.924 272.26 568.924 286.869 568.924 286.869 583.535 286.869 663.89 286.869 678.499 272.26 678.499 255.215 678.499 240.604 678.499 240.604 663.89 240.604 646.845 223.559 646.845 223.559 687.022 208.949 687.022 208.949 646.845 208.949 632.234 223.559 632.234 240.604 632.234 255.215 632.234 255.215 646.845 255.215 663.89 272.26 663.89 272.26 583.535 255.215 583.535 255.215 600.579 255.215 615.189 240.604 615.189 223.559 615.189" />
                <polygon fillRule="evenodd" clipRule="evenodd" fill="#facc15" points="208.949 741.81 208.949 727.2 208.949 687.023 223.559 687.023 223.559 727.2 240.604 727.2 240.604 710.155 240.604 695.544 255.215 695.544 272.26 695.544 286.869 695.544 286.869 710.155 286.869 790.509 286.869 805.12 272.26 805.12 255.215 805.12 240.604 805.12 240.604 790.509 240.604 773.464 223.559 773.464 223.559 813.642 208.949 813.642 208.949 773.464 208.949 758.855 223.559 758.855 240.604 758.855 255.215 758.855 255.215 773.464 255.215 790.509 272.26 790.509 272.26 710.155 255.215 710.155 255.215 727.2 255.215 741.81 240.604 741.81 223.559 741.81" />
                <polygon fillRule="evenodd" clipRule="evenodd" fill="#facc15" points="381.835 442.304 367.225 442.304 327.048 442.304 327.048 456.913 367.225 456.913 367.225 473.959 350.18 473.959 335.57 473.959 335.57 488.569 335.57 505.615 335.57 520.224 350.18 520.224 430.535 520.224 445.145 520.224 445.145 505.615 445.145 488.569 445.145 473.959 430.535 473.959 413.49 473.959 413.49 456.913 453.668 456.913 453.668 442.304 413.49 442.304 398.88 442.304 398.88 456.913 398.88 473.959 398.88 488.569 413.49 488.569 430.535 488.569 430.535 505.615 350.18 505.615 350.18 488.569 367.225 488.569 381.835 488.569 381.835 473.959 381.835 456.913" />
                <polygon fillRule="evenodd" clipRule="evenodd" fill="#facc15" points="508.455 442.304 493.846 442.304 453.668 442.304 453.668 456.913 493.846 456.913 493.846 473.959 476.801 473.959 462.19 473.959 462.19 488.569 462.19 505.615 462.19 520.224 476.801 520.224 557.155 520.224 571.766 520.224 571.766 505.615 571.766 488.569 571.766 473.959 557.155 473.959 540.11 473.959 540.11 456.913 580.288 456.913 580.288 442.304 540.11 442.304 525.5 442.304 525.5 456.913 525.5 473.959 525.5 488.569 540.11 488.569 557.155 488.569 557.155 505.615 476.801 505.615 476.801 488.569 493.846 488.569 508.455 488.569 508.455 473.959 508.455 456.913" />
            </svg>
            <svg className="absolute right-0 top-0 h-[55px] w-[55px] rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="208.949 442.304 371.339 371.338">
                <path fillRule="evenodd" clipRule="evenodd" fill="#facc15" d="M 240.604 473.959 L 240.604 456.913 L 223.559 456.913 L 223.559 473.959 L 240.604 473.959 Z M 272.26 488.569 L 255.215 488.569 L 255.215 505.615 L 272.26 505.615 L 272.26 488.569 Z M 272.26 537.269 L 272.26 520.224 L 255.215 520.224 L 255.215 537.269 L 272.26 537.269 Z M 303.915 488.569 L 286.869 488.569 L 286.869 505.615 L 303.915 505.615 L 303.915 488.569 Z M 208.949 442.304 L 223.559 442.304 L 240.604 442.304 L 255.215 442.304 L 255.215 456.913 L 255.215 473.959 L 272.26 473.959 L 272.26 456.913 L 272.26 442.304 L 286.869 442.304 L 327.048 442.304 L 327.048 456.913 L 286.869 456.913 L 286.869 473.959 L 303.915 473.959 L 318.524 473.959 L 318.524 488.569 L 318.524 505.615 L 318.524 520.224 L 303.915 520.224 L 286.869 520.224 L 286.869 537.269 L 286.869 551.879 L 272.26 551.879 L 255.215 551.879 L 240.604 551.879 L 240.604 537.269 L 240.604 520.224 L 223.559 520.224 L 223.559 560.402 L 208.949 560.402 L 208.949 520.224 L 208.949 505.615 L 223.559 505.615 L 240.604 505.615 L 240.604 488.569 L 223.559 488.569 L 208.949 488.569 L 208.949 473.959 L 208.949 456.913 L 208.949 442.304 L 208.949 442.304 Z" />
                <polygon fillRule="evenodd" clipRule="evenodd" fill="#facc15" points="208.949 615.189 208.949 600.579 208.949 560.402 223.559 560.402 223.559 600.579 240.604 600.579 240.604 583.535 240.604 568.924 255.215 568.924 272.26 568.924 286.869 568.924 286.869 583.535 286.869 663.89 286.869 678.499 272.26 678.499 255.215 678.499 240.604 678.499 240.604 663.89 240.604 646.845 223.559 646.845 223.559 687.022 208.949 687.022 208.949 646.845 208.949 632.234 223.559 632.234 240.604 632.234 255.215 632.234 255.215 646.845 255.215 663.89 272.26 663.89 272.26 583.535 255.215 583.535 255.215 600.579 255.215 615.189 240.604 615.189 223.559 615.189" />
                <polygon fillRule="evenodd" clipRule="evenodd" fill="#facc15" points="208.949 741.81 208.949 727.2 208.949 687.023 223.559 687.023 223.559 727.2 240.604 727.2 240.604 710.155 240.604 695.544 255.215 695.544 272.26 695.544 286.869 695.544 286.869 710.155 286.869 790.509 286.869 805.12 272.26 805.12 255.215 805.12 240.604 805.12 240.604 790.509 240.604 773.464 223.559 773.464 223.559 813.642 208.949 813.642 208.949 773.464 208.949 758.855 223.559 758.855 240.604 758.855 255.215 758.855 255.215 773.464 255.215 790.509 272.26 790.509 272.26 710.155 255.215 710.155 255.215 727.2 255.215 741.81 240.604 741.81 223.559 741.81" />
                <polygon fillRule="evenodd" clipRule="evenodd" fill="#facc15" points="381.835 442.304 367.225 442.304 327.048 442.304 327.048 456.913 367.225 456.913 367.225 473.959 350.18 473.959 335.57 473.959 335.57 488.569 335.57 505.615 335.57 520.224 350.18 520.224 430.535 520.224 445.145 520.224 445.145 505.615 445.145 488.569 445.145 473.959 430.535 473.959 413.49 473.959 413.49 456.913 453.668 456.913 453.668 442.304 413.49 442.304 398.88 442.304 398.88 456.913 398.88 473.959 398.88 488.569 413.49 488.569 430.535 488.569 430.535 505.615 350.18 505.615 350.18 488.569 367.225 488.569 381.835 488.569 381.835 473.959 381.835 456.913" />
                <polygon fillRule="evenodd" clipRule="evenodd" fill="#facc15" points="508.455 442.304 493.846 442.304 453.668 442.304 453.668 456.913 493.846 456.913 493.846 473.959 476.801 473.959 462.19 473.959 462.19 488.569 462.19 505.615 462.19 520.224 476.801 520.224 557.155 520.224 571.766 520.224 571.766 505.615 571.766 488.569 571.766 473.959 557.155 473.959 540.11 473.959 540.11 456.913 580.288 456.913 580.288 442.304 540.11 442.304 525.5 442.304 525.5 456.913 525.5 473.959 525.5 488.569 540.11 488.569 557.155 488.569 557.155 505.615 476.801 505.615 476.801 488.569 493.846 488.569 508.455 488.569 508.455 473.959 508.455 456.913" />
            </svg>
            <div className="m-5 flex h-full items-center">
                <img className="max-h-[90%] max-w-[90%] rounded-full p-2" src="https://i.pinimg.com/474x/64/6e/cd/646ecdcc0bc922739d206b9c4a752fa1.jpg" alt="" />
                <h1 className="m-5 inline text-textyellow text-3xl font-bold">{"Trang chủ"}</h1>
            </div>
            <div className="absolute left-1/3 flex -translate-x-1/2 transform-gpu items-center align-middle">
                {links.map((link, index) =>
                    <div className="mx-2 flex items-center justify-center text-center align-middle" key={index}>
                        <Link className="h-4/5 w-[180px] rounded bg-red-700 py-2.5 text-textyellow text-xl hover:bg-red-600" to={link.navigateTo}>{link.display}</Link>
                    </div>)
                }
                {links.map((link, index) =>
                    <div className="mx-2 flex items-center justify-center text-center align-middle" key={index}>
                        <Link className="h-4/5 w-[180px] rounded bg-red-700 py-2.5 text-textyellow text-xl hover:bg-red-600" to={link.navigateTo}>{link.display}</Link>
                    </div>)
                }
            </div>
            <div className="my-10">
                <button onClick={handleButton} className="h-4/5 w-[180px] rounded bg-red-800 p-[12px] hover:bg-red-700" type="button">
                    <p className="text-textyellow">{"Đăng nhập"}</p>
                </button>
                <button onClick={handleButton} className="m-5 h-4/5 w-[180px] rounded bg-red-800 p-[12px] hover:bg-red-700" type="button">
                    <p className="text-textyellow">{"Đăng ký"}</p>
                </button>
            </div>
        </div>
    )
}

export default LandingPage