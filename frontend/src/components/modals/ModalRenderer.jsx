import { useDispatch, useSelector } from 'react-redux'
import modals from './index'
import { actions as modalsActions } from '../../store/modalsSlice'

import { Suspense } from 'react'

const ModalRenderer = () => {
  const dispatch = useDispatch()
  const modal = useSelector(state => state.modalsReducer)
  const { type, isOpen, data } = modal
  // const Modal = modals(type)

  const CurrentModalComponent = modals(type)

  return isOpen
    ? (
      // <Modal data={data} onClose={() => dispatch(modalsActions.closeModal())} />
        <Suspense fallback={<div>...</div>}>
          <CurrentModalComponent data={data} onClose={() => dispatch(modalsActions.closeModal())} />
        </Suspense>
      )
    : null
}

export default ModalRenderer
