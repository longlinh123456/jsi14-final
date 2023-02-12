function Card() {
    return (
        <div>
            <form
                autoComplete="off"
                className="w-full max-w-[600px] rounded-lg bg-white p-2 shadow-input"
                aria-label="signup-form">
                <div className="flex flex-col items-start gap-y-3">
                    <label htmlFor="email" className="cursor-pointer text-sm font-medium">
                        Thiệp chúc Tết
                    </label>
                    <input
                        className="w-full rounded-lg border border-gray-200 bg-transparent px-40 py-20 outline-none"
                        placeholder="Gửi lời chúc của bạn"
                    />
                </div>
            </form>
        <br></br>
            <button
                type="button"
                className="inline-flex h-[50px] w-full items-center justify-center rounded-lg bg-blue-500 px-8 py-4 font-sans font-semibold tracking-wide text-white hover:bg-blue-400"
                onClick={() => {

                }
                }
            >
                Gửi!
            </button>
        </div>

    )
}

export default Card