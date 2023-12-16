import {React,Fragment} from 'react'
import GlobalLayout from '../../utils/hoc/globalLayout'
import { Tab } from '@headlessui/react'
import Status from './sub-components/Status'
import Priority from './sub-components/Priority'
import Achievement from './sub-components/Achievement'
import ProjectGraph from './sub-components/ProjectGraph'

const Overview = () => {
  return (
    <GlobalLayout>
      <p className="title text-2xl mt-4">
        Reports
      </p>
      <div className="p-5 mb-40">
        <Tab.Group >
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            <Tab as={Fragment}  className='w-1/4 rounded-lg py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected ? 'bg-white text-blue-700 shadow'
                : 'text-[#252c48]  hover:bg-white/[2] hover:text-[#252c48]'
              }
            >
              Status
            </button>
          )}
        </Tab>
            <Tab as={Fragment}  className='w-1/4 rounded-lg py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected ? 'bg-white text-blue-700 shadow'
                : 'text-[#252c48]  hover:bg-white/[2] hover:text-[#252c48]'
              }
            >
              Priority
            </button>
          )}</Tab>
            <Tab as={Fragment}  className='w-1/4 rounded-lg py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected ? 'bg-white text-blue-700 shadow'
                : 'text-[#252c48]  hover:bg-white/[2] hover:text-[#252c48]'
              }
            >
              Achievement Rate
            </button>
          )}</Tab>
          <Tab as={Fragment}  className='w-1/4 rounded-lg py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button
              className={
                selected ? 'bg-white text-blue-700 shadow'
                : 'text-[#252c48]  hover:bg-white/[2] hover:text-[#252c48]'
              }
            >
              Project
            </button>
          )}</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Status/>
            </Tab.Panel>
            <Tab.Panel>
              <Priority/>
            </Tab.Panel>
            <Tab.Panel>
              <Achievement/>
            </Tab.Panel>
            <Tab.Panel>
              <ProjectGraph/>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="my-52">
        .
      </div>
      <div className="my-52">
        .
      </div>
    </GlobalLayout>
  )
}

export default Overview
