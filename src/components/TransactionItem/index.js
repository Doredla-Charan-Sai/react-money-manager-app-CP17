// Write your code here
import './index.css'

const TransactionItem = props => {
  const {detailsTrans, onDelete} = props
  const {id, title, amount, type} = detailsTrans
  const onRemove = () => {
    onDelete(id)
  }
  return (
    <li className="list-item">
      <p className="heading">{title}</p>
      <p className="heading">Rs. {amount}</p>
      <p className="heading">{type === 'INCOME' ? 'Income' : 'Expenses'}</p>
      <button
        type="button"
        onClick={onRemove}
        data-testid="delete"
        className="btn"
      >
        <img
          className="img-delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
