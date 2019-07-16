import React, {useState, useEffect} from "react"
import useLocalStorage from "./useLocalStorage"

function useDarkMode () {
    const [value, setValue] = useLocalStorage("darkModeEnabled")
    useEffect( () => {
        useLocalStorage ? {/* add darkmode*/} : {/* remove darkmode*/}
    }, [])

}

export default useDarkMode