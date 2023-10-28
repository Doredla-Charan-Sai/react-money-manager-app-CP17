// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props
  return (
    <div className="money-details-cont">
      <div className="money-cont balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon"
        />
        <div className="text">
          <p className="head">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs. {income - expenses}
          </p>
        </div>
      </div>
      <div className="money-cont income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon"
        />
        <div className="text">
          <p className="head">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs. {income}
          </p>
        </div>
      </div>
      <div className="money-cont expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon"
        />
        <div className="text">
          <p className="head">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs. {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
