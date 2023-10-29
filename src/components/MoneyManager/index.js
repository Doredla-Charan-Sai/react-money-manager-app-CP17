import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
    income: 0,
    expenses: 0,
    historyList: [],
  }

  onTypeTitle = event => {
    this.setState({title: event.target.value})
  }

  onTypeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onSelectType = event => {
    this.setState({type: event.target.value})
  }

  updateIncome = () => {
    const {amount, type} = this.state
    if (type === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income + parseInt(amount),
      }))
    }
  }

  updateExpenses = () => {
    const {amount, type} = this.state
    if (type === 'EXPENSES') {
      this.setState(prevState => ({
        expenses: prevState.expenses + parseInt(amount),
      }))
    }
  }

  onAdd = event => {
    event.preventDefault()
    const {type, amount, title} = this.state
    if (type === 'INCOME' && title.length !== 0 && amount.length !== 0) {
      this.setState(prevState => ({
        income: prevState.income + parseInt(amount),
        historyList: [
          ...prevState.historyList,
          {id: uuidv4(), title, amount, type},
        ],
        title: '',
        amount: '',
      }))
    } else if (
      type === 'EXPENSES' &&
      title.length !== 0 &&
      amount.length !== 0
    ) {
      this.setState(prevState => ({
        expenses: prevState.expenses + parseInt(amount),
        historyList: [
          ...prevState.historyList,
          {id: uuidv4(), title, amount, type},
        ],
        title: '',
        amount: '',
      }))
    }
  }

  onDelete = uniqueId => {
    const {historyList} = this.state
    const findItem = historyList.find(each => each.id === uniqueId)
    if (findItem.type === 'INCOME') {
      this.setState(prevState => ({
        historyList: prevState.historyList.filter(item => item.id !== uniqueId),
        income: prevState.income - parseInt(findItem.amount),
      }))
    } else if (findItem.type === 'EXPENSES') {
      this.setState(prevState => ({
        historyList: prevState.historyList.filter(item => item.id !== uniqueId),
        expenses: prevState.expenses - parseInt(findItem.amount),
      }))
    }
  }

  render() {
    const {title, amount, type, income, expenses, historyList} = this.state
    return (
      <div className="bg-cont">
        <div className="user-name-cont">
          <h1 className="user-name">Hi, Richard</h1>
          <p className="welcome-para">
            Welcome back to your{' '}
            <span className="span-para">Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} expenses={expenses} />
        <div className="lower-cont">
          <div className="form-cont">
            <form className="form" onSubmit={this.onAdd}>
              <h1 className="form-head">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                className="input"
                onChange={this.onTypeTitle}
                placeholder="TITLE"
                value={title}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                id="amount"
                type="text"
                className="input"
                onChange={this.onTypeAmount}
                placeholder="AMOUNT"
                value={amount}
              />
              <label htmlFor="type" className="label">
                TYPE
              </label>
              <select
                id="type"
                className="input"
                onChange={this.onSelectType}
                value={type}
              >
                <option
                  key={transactionTypeOptions[0].optionId}
                  value={transactionTypeOptions[0].optionId}
                >
                  {transactionTypeOptions[0].displayText}
                </option>
                <option
                  key={transactionTypeOptions[1].optionId}
                  value={transactionTypeOptions[1].optionId}
                >
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div className="table-cont form-cont">
            <h1 className="form-head">History</h1>
            <div className="headings-cont">
              <p className="heading">Title</p>
              <p className="heading">Amount</p>
              <p className="heading">Type</p>
            </div>
            <ul className="history-list-cont">
              {historyList.map(eachItem => (
                <TransactionItem
                  detailsTrans={eachItem}
                  key={eachItem.id}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
