import './ExpenseItem.css'

function ExpenseItem(){

    const ExpenseDate = new Date(2021, 2, 5);

    return(
        <div className="expense-item">
            <div>{ExpenseDate.toISOString()}</div>
            <div className="expense-item__description">
               <h2> Car Insurance</h2>
               <div className="expense-item__price">$180</div>
            </div>
        </div>
        
    )
    
}
export default ExpenseItem;