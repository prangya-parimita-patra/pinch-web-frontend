import Link from "next/link";

const Legal = () => {
  return (
    <div className="footSections legalSection">
    <div className="footTitle">Legal</div>
    <div className="footData legalData">
        <ul>
        <li><Link href='/terms-of-us'><a target='_blank' style={{ textDecoration:'none' , color:'var(--color-terinary)'}}>Terms & conditions</a></Link></li>
            <li><Link href='/privacy-policies'><a target='_blank' style={{ textDecoration:'none' , color:'var(--color-terinary)'}}>Privacy Policy</a></Link></li>
        </ul>
    </div>
  </div>
  )
}

export default Legal