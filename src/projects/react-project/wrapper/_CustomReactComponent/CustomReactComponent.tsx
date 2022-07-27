import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

export interface IMyComponentProps {
    counter: number;
    onClick?: () => void;
}

export const CustomReactComponent: FunctionComponent<IMyComponentProps> = (props: IMyComponentProps) => {

    const timerHandle = useRef<number | null>(null);
    const [stateCounter, setStateCounter] = useState(0);

    useEffect(() => {
        timerHandle.current = +setInterval(() => {
            setStateCounter(stateCounter + 1);
        }, 1000);

        return () => {
            if (timerHandle.current) {
                clearInterval(timerHandle.current);
                timerHandle.current = null;
            }
        };
    });

    const {counter: propsCounter, onClick} = props;

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div>
            <div>Props counter: {propsCounter}
                <button type="button" onClick={handleClick}>click to increase</button>
            </div>
            <div>State counter: {stateCounter}</div>
        </div>
    );
};
