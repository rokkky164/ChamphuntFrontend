const Modal = (props) => {

    const { image, tag, handleClose } = props;

    const copyToClipboard = () => {
        const copyText = document.querySelector("#code");
        copyText.select();
        document.execCommand("copy");
        handleClose();
    }

    return <div className="deal-modal">
        <div className="deal-container">
            <div className="deal-tag-cnt">
                <h2 className="deal-tag" >{ tag }</h2>
            </div>
            <div className="deal-content">
                <img src={image} alt='' />
                <p className='discount'>
                    Up to XX% off on all online purchases at <span className="highlight"> India </span> Store
                </p>
                <p className="copy-paste">
                    Copy and paste this code at Puma
                </p>
                <div className="code-block">
                    <input id='code' readOnly={true} className="code" value='ABCDEFG89auXX' />
                    <p className="copy" role="button" onClick={copyToClipboard}>
                        Copy
                    </p>
                </div>
            </div>
            <div className="deal-footer">
                <p>
                Note : Tap the offer to copy the coupon code. Remember to paste code when you check out. Online Only
                </p>
            </div>
        </div>
    </div>
}

export default Modal;