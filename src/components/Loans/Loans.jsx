import { iconsImgs } from "../../utils/images";
import "./Loans.css";
import { loans } from "../../data/data";

const Loans = () => {
    const loan = loans[0];
    const progressPercentage = (loan.progress / loan.total_due_amount) * 100;


    return (
        <div className="subgrid-two-item grid-common grid-c7">
            <div className="grid-c-title">
                <h3 className="grid-c-title-text">Loans</h3>
                <button className="grid-c-title-icon">
                    <img src={iconsImgs.plus} />
                </button>
            </div>
            <div className="grid-c7-content">
                <div className="progress-bar">
                    <div className="percent">
                        <svg>
                        <circle className="unfilled-circle" stroke="#f8967b" cx="105" cy="105" r="50"></circle>
    <circle
        className="filled-circle"
        cx="105"
        cy="105"
        r="50"
        style={{
            strokeDasharray: "100%",
            strokeDashoffset: `calc(100% - ${progressPercentage}%)`,
            stroke: "#ccc"
        }}
    ></circle>
                        </svg>
                        <div className="number">
                            <h3>{Math.round(progressPercentage)}<span>%</span></h3>
                        </div>
                    </div>
                </div>
                <ul className="data-list">
                    <li className="data-item text-silver-v1">
                        <span className="data-item-text">Total due</span>
                        <span className="data-item-value">$ {loan.total_due_amount}</span>
                    </li>
                    <li className="data-item text-silver-v1">
                        <span className="data-item-text">Total paid</span>
                        <span className="data-item-value">$ {loan.progress}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Loans
