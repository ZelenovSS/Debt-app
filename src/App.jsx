import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addDebtor, updateDebtStatus } from './store/debtors';

import './App.scss'

const defaultDebtorData = { name: '', debt: 0, status: false}

const App = () => {
  const { list } = useSelector(state => state.debtors)
  const dispatch = useDispatch();
  const [formData, udpateFormData] = useState(defaultDebtorData)
  const fillCheck = useMemo(() => !formData.name || !formData.debt, [formData])
  const updateFormData = (e) => {
    const { id, value } = e.target;

    udpateFormData((current => ({...current, [id]: value})))
  }

  const addNewDebtor = () => {
    dispatch(addDebtor({
      id: uuidv4(),
      ...formData
    }));
    udpateFormData(() => defaultDebtorData)
  }

  return (
    <div className='App'>
      <h1>Список должников</h1>
      <div className='form'>
        <label>
          ФИО
          <input type="text" id='name' value={formData.name} onChange={(e) => updateFormData(e)}/>
        </label>
        <label>
          Задолженность(₽)
          <input type="number" id='debt' min={0} value={formData.debt} onChange={(e) => updateFormData(e)}/>
        </label>
        <button onClick={addNewDebtor} disabled={fillCheck}>Добавить</button>
      </div>
      <div className='debtors'>
        {list.map(debtor => <div className='debtors__item' key={debtor.id}>
        <span>{debtor.name}</span>
        <span>{debtor.debt}</span>
        <input type="checkbox" checked={debtor.status} onChange={() => dispatch(updateDebtStatus(debtor.id))} />
        </div>)}
      </div>
    </div>
  )
}

export default App