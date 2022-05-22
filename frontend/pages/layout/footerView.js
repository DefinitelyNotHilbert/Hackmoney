

export default function FooterView() {
  return (

    <div className="flex w-full h-24 justify-center items-center mt-16 border-t border-gray-200">
        <div className="text-2xl font-light text-gray-800 md:text-3xl">
            <a href="#" className="flex">
                <span className="text-sm mx-2">@2022</span>
                <img src="CANDID.svg" height={20} alt="" />
                <span className="text-sm mx-2">All right reserved.</span>
            </a>
        </div>
    </div>
  )
}