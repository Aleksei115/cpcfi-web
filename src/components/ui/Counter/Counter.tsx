import { useRef,useEffect, type FC } from 'react'
import {  useInView, animate} from "framer-motion";
import styles from './counter.module.scss'


type Props = {
    from?: number,
    to: number,
    symbol: string
}

export const Counter: FC<Props> = ({from = 0, to, symbol}) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref,{ once: true })
    // const controls = useAnimation();


    useEffect(() => {

        const node = ref.current

        const controls = animate(from, to,{
            duration: 1.5,
            onUpdate(value) {
                if(node != null)
                    node.textContent = `${symbol}${value.toFixed(0)}` 
            },
        });


        return () => {
            controls.stop
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isInView])


    return (
        <p ref={ref} className={styles.numbers}></p>
    )
}
