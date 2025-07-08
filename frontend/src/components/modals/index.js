// import AddChannel from './AddChannel.jsx'
// import RemoveChannel from './RemoveChannel.jsx'
// import RenameChannel from './RenameChannel.jsx'
import { lazy } from 'react'

const AddChannel = lazy(() => import('./AddChannel.jsx'))
const RemoveChannel = lazy(() => import('./RemoveChannel.jsx'))
const RenameChannel = lazy(() => import('./RenameChannel.jsx'))

const modals = {
  adding: AddChannel,
  removing: RemoveChannel,
  renaming: RenameChannel,
}

export default modalName => modals[modalName]
