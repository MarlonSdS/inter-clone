import '../styles/Saldo.css'
import {MdOutlineMenu, MdSearch, MdRemoveRedEye} from 'react-icons/md'

export default function Saldo(){
    return(
        <div className='header'>
            <header>
                <h1>inter</h1>
                <div> <MdSearch /> <MdOutlineMenu /></div>
            </header>
            <div className='saldo'>
                <h1>R$0,00 <MdRemoveRedEye /></h1>
                <h2>Ver Extrato</h2>
            </div>
        </div>
    )
}