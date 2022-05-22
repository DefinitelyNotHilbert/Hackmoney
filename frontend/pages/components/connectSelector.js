
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi';

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ConnectSelector() {
  const { connect, connectors, error, isConnecting, pendingConnector } = useConnect()
  const rows = connectors.map((connector) => (
      <Menu.Item key={connector.id}>
        {({ active }) => (
                <a  onClick={() => connect(connector)}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                   {connector.name}
                </a>
              )}
    </Menu.Item>
  ));


  return (
    <Menu as="div" className="relative text-left z-50">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-full shadow-xl border border-gray-100 shadow-sm px-4 py-2 bg-white text-sm font-medium text-blue-100 bg-blue-500  hover:bg-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          connect
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
