import {MdCreditCard, MdAutoGraph, MdQrCodeScanner,
MdAttachMoney, MdCardGiftcard, MdHome, MdVpnKey, MdOutlineUmbrella, MdHealthAndSafety} from 'react-icons/md'
import '../styles/Options.css'

export default function Options(){
    return(
        <div className="options">
            <div className="card">
                <MdCreditCard />
                <span>Cartões</span>
            </div>
            <div className="card">
                <MdAutoGraph />
                <span>Investir</span>
            </div>
            <div className="card">
                <MdQrCodeScanner />
                <span>Pagar Pix</span>
            </div>
            <div className="card">
                <MdAttachMoney />
                <span>Transferir</span>
            </div>
            <div className="card">
                <MdCardGiftcard />
                <span>Gifitcards</span>
            </div>
            <div className="card">
                <MdHome />
                <span>Financiamento Imobiliário</span>
            </div>
            <div className="card">
                <MdVpnKey />
                <span>Consórcio</span>
            </div>
            <div className="card">
                <MdOutlineUmbrella />
                <span>Seguro</span>
            </div>
            <div className="card">
                <MdHealthAndSafety />
                <span>Plano de Saúde</span>
            </div>
        </div>
    )
}