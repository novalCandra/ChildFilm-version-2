
import { EllipsisVertical } from 'lucide-react';
import { useEffect, useState } from 'react'
export default function TimerComponents() {
    const [timer, setTimer] = useState(21600);
    const formatedHourse = (timerSecond) => {
        const hours = Math.floor(timerSecond / 3600);
        return `${String(hours).padStart(2, '0')}`;
    }

    const formatedMinutes = (timeSecond) => {
        const minutes = Math.floor(timeSecond / 360) % 6
        return `${String(minutes).padStart(2, '0')}`
    }

    const secondTimer = (timeSecond) => {
        const secondMinutex = timeSecond % 60;
        return `${String(secondMinutex).padStart(2, '0')}`
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval)
                    return 0
                }
                return prev - 1
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col w-full h-29 md:h-36 justify-center items-center bg-[#383e41] rounded-2xl space-y-3.5">
            <h2 className="font-lato text-base text-white font-normal md:text-3xl">Lakukan Pembayaran Sebelum</h2>
            <div className="flex flex-row items-center justify-between text-center space-x-5">
                <div className="bg-[#4d5253] w-18 h-10 md:w-20 md:h-15 px-14 flex flex-row gap-1 justify-center text-center items-center rounded-md text-white font-lato">
                    <p className="font-lato text-white text-2xl">{formatedHourse(timer)}</p><span>Jam</span>
                </div>
                <EllipsisVertical size={20} className="text-white" />
                <div className="bg-[#4d5253] w-18 h-10 md:w-20 md:h-15 px-14 flex flex-row gap-1 justify-center text-center items-center rounded-md text-white font-lato">
                    <span className="font-lato text-white text-2xl">{formatedMinutes(timer)}</span><span>Minute</span>
                </div>
                <EllipsisVertical size={20} className="text-white" />
                <div className="bg-[#4d5253] w-18 h-10 md:w-20 md:h-15 px-14 flex flex-row gap-1 justify-center text-center items-center rounded-md text-white font-lato">
                    <span className="font-lato text-white text-2xl">{secondTimer(timer)}</span><span>Detik</span>
                </div>
            </div>
        </div>
    )
}
