/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function CoinSelector() {
  let selected =''
  const coins =[
    {
        symbol:"AAVE",
        img:"./assets/AAVE.png"
    },{
        symbol:"DAI",
        img:"./assets/DAI.png"
    },{
        symbol:"ETH",
        img:"./assets/ETH.png"
    },
    {
        symbol:"REP",
        img:"./assets/REP.png"
    },{
        symbol:"SUSHI",
        img:"./assets/SUSHI.png"
    },{
        symbol:"VRN",
        img:"./assets/VRN.png"
    }
  ];
  const rows = coins.map((_c) => (
      <Menu.Item key={_c.symbol}>
        {({ active }) => (
                <a  onClick={e=> {selected =_c.symbol;console.log(_c.symbol, selected); e.stopPropagation();} }
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className='flex items-center'>
                  <img className='h-8 w-8 ml-2' src={_c.img} />
                  <span className='font-extrabold ml-2'>{_c.symbol}</span>
                  </div>
                </a>
              )}
    </Menu.Item>
  ));


  return (
    <Menu as="div" className="relative text-left z-50">
      {selected}
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-full shadow-xl border border-gray-100 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          {
            selected ===''
            ? <p>option</p>
            : <p>selected</p>
            // <div className='flex items-center'><img className='h-8 w-8 ml-2' src={selected.img} /> <span className='font-extrabold ml-2'>{selected.symbol}</span></div>
          }
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {rows}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
