import ChampButton from "../../commons/form/button";

const Deal = (props) => {

    const { tag, src } = props;

    const handleOnClick = () => {

    }

    return <div className="component deal">
        <div className="tag">
            { tag }
        </div>
        <div className="deal-image">
            <img src={src} alt='' className="img" />
        </div>
        <div className="redeem-block">
            <ChampButton label="REDEEM" onClick={handleOnClick} />
        </div>
    </div>

}

export default Deal;