
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { ArrowCircleUpIcon } from "@heroicons/react/outline"


function Footer() {
    return (
        <footer className="p-5 text-white h-auto">
            <div className="flex items-center justify-between">
                <div className="flex text-3xl gap-5">
                    <FontAwesomeIcon icon={faFacebook} className="transition delay-75 hover:text-cyan-600" />
                    <FontAwesomeIcon icon={faTwitter} className="transition delay-75 hover:text-cyan-600"/>
                    <FontAwesomeIcon icon={faYoutube} className="transition delay-75 hover:text-cyan-600"/>
                </div>
                <ArrowCircleUpIcon className="max-w-[2.5rem] transition delay-75 hover:text-cyan-600" />
            </div>

            <div className="text-xs my-6 max-w-xl sm:text-sm">
                <h3 className="font-bold text-[#999999]">Resources</h3>
                <ul className="grid grid-cols-3 grid-flow-row cursor-pointer">
                    <li className="transition delay-75 hover:text-cyan-600">Support-A-Creator</li>
                    <li className="transition delay-75 hover:text-cyan-600" >Fan Art Policy</li>
                    <li className="transition delay-75 hover:text-cyan-600">Online Services</li>
                    <li className="transition delay-75 hover:text-cyan-600">Publish on Epic Games</li>
                    <li className="transition delay-75 hover:text-cyan-600">UX Research</li>
                    <li className="transition delay-75 hover:text-cyan-600">Community Rules</li>
                    <li className="transition delay-75 hover:text-cyan-600">Careers</li>
                    <li className="transition delay-75 hover:text-cyan-600">Store EULA</li>
                    <li className="transition delay-75 hover:text-cyan-600">Epic Newsroom</li>
                    <li className="transition delay-75 hover:text-cyan-600">Company</li>                    
                </ul>
            </div>

            <div className="text-xs my-6 max-w-xl sm:text-sm">
                <h3 className="font-bold text-[#999999]">Made By Epic Games</h3>
                <ul className="grid grid-cols-2 grid-flow-row cursor-pointer">
                    <li className="transition delay-75 hover:text-cyan-600">Battle Breakers</li>
                    <li className="transition delay-75 hover:text-cyan-600">Robo Recall</li> 
                    <li className="transition delay-75 hover:text-cyan-600">Fortnite</li> 
                    <li className="transition delay-75 hover:text-cyan-600">Shadow Complex</li> 
                    <li className="transition delay-75 hover:text-cyan-600">Infinity Blade</li>          
                    <li className="transition delay-75 hover:text-cyan-600">Unreal Tournament</li> 
                </ul>
            </div>

            <hr />

            <p className="text-xs my-6 max-w-xl">© 2022, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Epic Games International, S.à r.l. </p>

            
            <ul className="flex items-center flex-col gap-2 text-xs sm:flex-row">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Store Refund Policy</li>
            </ul>
        </footer>
        
    )
}

export default Footer