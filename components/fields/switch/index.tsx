import { useState } from 'react'
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri'

import styles from './Switch.module.scss'

type SwitchFieldProps = {
    id: string
}

const SwitchField = ({ id }: SwitchFieldProps) => {
    const [isDark, setIsDark] = useState(true)

    return (
        <div className={styles.SwitchField}>
            <input checked={isDark} type="checkbox" id={id} />
            <label htmlFor={id}>
                {isDark ? <RiMoonClearFill /> : <RiSunFill />}
                <span onClick={() => setIsDark(!isDark)} />
            </label>
        </div>
    )
}

export default SwitchField
