import Image from 'next/image';
import Approval from '../../public/Approval.png'
import Secure from '../../public/Secure.png'
import SafeIn from '../../public/Safe In.png'
const trustReasons = () => {
  return (
    <>
        <div className="trustGroup text-md">
            {/* <div className="trustData">
                <div className="trustIcon"><Image src={Approval} priority alt='Regulated by SEBI' width={500} height={500}/></div>
                <div className="trustText ">We&apos;re regulated by SEBI and <span className="trustText_bold">licensed by AMFI</span> and partnered with <span className="trustText_bold">BSE</span> to offer to comprehensive Mutual Fund Solution</div>
            </div> */}
            <div className="trustData">
                <div className="trustIcon"><Image src={Secure}  priority alt='Regulated by SEBI' width={500} height={500}/></div>
                <div className="trustText">Pinch ensures <span className="trustText_bold">end-to-end encryption</span> between our app and payment channels.  Pinch employs <span className="trustText_bold"> bank-level security</span>. </div>
            </div>
            <div className="trustData">
                <div className="trustIcon"><Image src={SafeIn} priority alt='Regulated by SEBI' width={500} height={500}/></div>
                <div className="trustText">The physical gold is <span className="trustText_bold">stored safely</span>  in the vault of Sequel. The physical Gold/Silver stored in the vault is also covered by <span className="trustText_bold">insurance</span>.</div>
            </div>
        </div>
    </>
  )
}

export default trustReasons