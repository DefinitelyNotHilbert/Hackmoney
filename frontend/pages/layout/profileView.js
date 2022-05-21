

export default function ProfileView() {
  return (
<div className="w-full mt-5">
   <div className="flex flex-col md:flex-row">
      <div className="flex justify-center m-5">
        <img src="./assets/Oval.png" alt="profile image" />
      </div>
      <div className="flex flex-row justify-center m-5">
        <ul>
          <li>
            <div className="flex">
              <div className="text-2xl"> Class.eth</div>
              <div className="flex justify-center items-center mx-2">
                <img src="./assets/ProfileChecked.svg" art="" />
              </div>
            </div>
              </li>
          <li>
            <div className="text-lg"> 0x83…c4</div>
          </li>
          <li className="flex">
              <div className="">
                <span>123</span><span className="ml-1">Following</span>
              </div>
              <div className="mx-2">
                <span>984</span><span className="ml-1">Followers</span>
              </div>
          </li>
          <li>
            <p>A lot of roads lead to rome but only one leads to <span>xxx</span>. </p>
          </li>
          <li>
            <div className="flex items-center">
            <span className="mr-2">Candid score:</span> <span className="text-blue-600">9.7</span>/<span>10</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2 fill-gray-500 hover:fill-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            </div>
          </li>
          <li>
            <div className="text-xl">
              Wallet Age
            </div>
          </li>
        </ul>
        
      </div>
   </div>
</div>

  );
}