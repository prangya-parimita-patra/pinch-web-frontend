import Image from 'next/image';
import PinchPlay from '../../public/Pinch-play-quiz.png'
import PinchPlayHome from '../../public/Pinch-play-home.png'
import Link from 'next/link';
import { useRouter } from 'next/router'
const Index = () => {
    const router = useRouter();
    const {id} = router.query;
    let link = `https://pinchapp.in/quiz/${id}`;
  return (
    <>
      <div className="quiz__dashboard">
          <div className="left__content">
              {/* <img src={requestAnimationFrame()} alt="PinchPlayLogo" className='pinchPlayLogo'/> */}
            <Image src={PinchPlay} alt="PinchPlayLogo" className='pinchPlayLogo' />
            <div className="pinch__play">
                <Image src={PinchPlayHome} alt="PinchPlayLogo" className='pinchPlayHome'/>
            </div>
            <div className="text__content">
                <p>Pinch Play is a free financial education tool that helps you learn about money, make smarter financial decisions, and get on a pathway to financial freedom. <br/> <br />
                Give quizzes to earn pinch points and stand out among peers across India
                </p>
            </div>
            <button><Link href={link}>Play</Link></button>
          </div>
          <div className="right__content">
            <Image src={PinchPlayHome} alt="PinchPlayLogo" className='pinchPlayHome'/>
          </div>
      </div>
    </>
  );
};

export default Index;
