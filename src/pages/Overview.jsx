
import { useEffect } from "react"

import Header from "../components/Header"
import Introduction from "../components/Introduction"
import WhatIDo from "../components/WhatIDo"
import WhoIAm from "../components/WhoIAm"
import MyProjects from "../components/MyProjects"
import Footer from "../components/Footer"
import Contact from "../components/Contact"

export default function Overview(){
    const height = sessionStorage.getItem("scrollHeight")
    sessionStorage.removeItem("scrollHeight")

    const scrollHeight = height ? height : 0

    useEffect(() => {
        document.body.scrollTop = scrollHeight; // For Safari
        document.documentElement.scrollTop = scrollHeight; // For Chrome, Firefox, IE and Opera
    }, [])

    function saveScroll(){
        sessionStorage.setItem("scrollHeight", window.pageYOffset)
    }

    return(
        <div className="wrapper">
            <Header />
            <main>
                <Introduction />
                <WhatIDo />
                <WhoIAm />
                <MyProjects saveScroll={saveScroll}/>
                <Contact />
            </main>
            <Footer />
        </div>
    )
}