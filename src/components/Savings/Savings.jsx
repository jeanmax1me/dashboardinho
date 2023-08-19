import { savings } from "../../data/data";
import { iconsImgs, personsImgs } from "../../utils/images";
import "./Savings.css";

const Savings = () => {
    return (
        <div className="subgrid-two-item grid-common grid-c6">
            <div className="grid-c-title">
                <h3 className="grid-c-title-text">Savings</h3>
                <button className="grid-c-title-icon">
                    <img src={iconsImgs.plus} />
                </button>
            </div>
            <div className="grid-c6-content">
                <div className="grid-items">
                    {
                        savings.map((saving) => (
                            <div className="grid-item" key={saving.id}>
                                <div className="grid-item-top">
                                    <div className="grid-item-top-l">
                                        <div className="avatar img-fit-cover">
                                            <img src={personsImgs.besties} />
                                        </div>
                                        <p className="text text-silver-v1">{saving.title}</p>
                                    </div>
                                    <div className="grid-item-top-r">
                                        <span className="text-silver-v1">$ {saving.saving_amount}</span>
                                    </div>
                                </div>
                                <div className="grid-item-bottom">
                                    <div className="grid-item-badges">
                                        <span className="grid-item-badge">To do before {saving.date_before}</span>
                                        <span className="grid-item-badge">Amount left $ {saving.amount_left}</span>
                                    </div>
                                    <div className="grid-item-progress">
                                        <div
                                            className="grid-item-fill"
                                            style={{
                                                width: `${((saving.saving_amount - saving.amount_left) / saving.saving_amount) * 100}%`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Savings
