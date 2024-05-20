import CardContainer from "./CardContainer"
import Rifna from "../assets/Rifna.jpg"
import jee from "../assets/jeeva.jfif"
import abi from "../assets/abi.png"
import afsal from "../assets/afsal.jfif"
import amal from "../assets/amal.jfif"
import anurag from "../assets/anurag.jfif"
import shibu from "../assets/shibu.png"
import subin from "../assets/subin.jfif"

const Card = () => {
  return (
    <div className="mt-5">
        <h1 className="mx-auto font-extrabold text-5xl text-center">Meet our teams</h1>
        <div className="bg-dark py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-3">
                    <CardContainer name="Rifna" position="CEO" img={Rifna} />
                    <CardContainer name="Nisamudheen" position="CTO" img={shibu} />
                    <CardContainer name="jeeva" position="Frontend Developer" img={jee} />
                    <CardContainer name="Abhijith" position="Flutter Developer" img={abi}/>
                    <CardContainer name="Afsal" position="MERN stack developer" img={afsal} />
                    <CardContainer name="Amal Nath" position="Cyber Security" img={amal} />
                    <CardContainer name="Anurag" position="Backend Developer" img={anurag} />
                    <CardContainer name="subin" position="Full Stack Developer" img={subin} />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Card