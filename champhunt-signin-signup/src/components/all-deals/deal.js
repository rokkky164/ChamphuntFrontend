import ChampButton from "../../commons/form/button";

const Deal = (props) => {

    const { tag, src, offername,  crickcoins_required} = props;

    const handleOnClick = () => {

    }
    return <div className="component deal">
        <div className="tag">
            { tag }
        </div>
        <div className="deal-image">
            <img src={src} alt='' className="img" />
        </div>
        <div>
            {offername}
        </div>
        <div>
            {crickcoins_required}
        </div>
        <div className="redeem-block">
            <ChampButton label="REDEEM" onClick={handleOnClick} />
        </div>
    </div>

}

export default Deal;