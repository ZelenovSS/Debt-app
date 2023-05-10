import { configureStore} from '@reduxjs/toolkit'

import debtorReduser from './debtors'

export default configureStore({
  reducer: {
    debtors: debtorReduser
  },
})
