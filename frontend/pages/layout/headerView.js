import { Fragment } from 'react'


export function HeaderView() {
  return (
<div class="w-full">
    {/** mobile */}
    <nav class="bg-white shadow-lg md:hidden">
        <div class="py-2 px-8 md:px-12">
            <div class="flex justify-between items-center">
               <div class="text-2xl font-bold text-gray-800 md:text-3xl">
                    <a href="#">
                        <img src="CANDID.svg" height={20} alt="" />
                    </a>
               </div>

               <div class="flex flex-col md:flex-row ">
                <button class="bg-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider  text-blue-100 rounded-full hover:shadow-2xl hover:bg-blue-600">
                    connect wallet
                </button>
               </div>
            </div>
            <div class="pt-2 w-full flex justify-center">
            <div class="w-full relative mx-auto text-gray-600">
                <input class="border-2 border-gray-300 bg-white w-full h-8 px-5 pr-16 rounded-full text-sm focus:outline-none"
                type="search" name="search" placeholder="Search" />
                <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                <svg class="h-4 w-4 fill-gray-300 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
                </button>
            </div>
            </div>
            
        </div>
    </nav>
    
    {/** desktop */}
    <nav class="bg-white shadow-lg hidden md:block">
        <div class="md:flex items-center justify-between py-2 px-8 md:px-12">
            <div class="flex justify-between items-center">
               <div class="text-2xl font-bold text-gray-800 md:text-3xl">
                    <a href="#">
                        <img src="CANDID.svg" height={20} alt="" />
                    </a>
               </div>
                
            </div>
            
            <div class="pt-2 relative mx-auto text-gray-600">
                <input class="border-2 border-gray-300 bg-white h-8 px-5 pr-16 rounded-full text-sm focus:outline-none"
                type="search" name="search" placeholder="Search" />
                <button type="submit" class="absolute right-0 bottom-1.5 mt-5 mr-4">
                <svg class="h-4 w-4 fill-gray-300 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
                </button>
            </div>
            <div class="flex flex-col md:flex-row hidden md:block -mx-2">
                <button class="bg-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider  text-blue-100 rounded-full hover:shadow-2xl hover:bg-blue-600">
                    connect wallet
                </button>

            </div>
        </div>
    </nav>
</div>

  );
}
