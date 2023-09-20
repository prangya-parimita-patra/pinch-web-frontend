import Image from 'next/image';
import backedBrands from './backedBrandsIcons'

const BackedBrands = () => {
  return (
    <div className="backedBrands">
    {
        backedBrands.map((value,index)=>{

        return(
            <div className="backedBrands_Icons" key={index}>
                <Image src={value.icon} placeholder="blur" alt='Regulated by SEBI' priority layout="responsive"/>
            </div>
        )
        })
    }
    </div>
  )
}

export default BackedBrands