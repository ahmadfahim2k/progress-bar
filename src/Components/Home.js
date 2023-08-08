import React from 'react';
import Circle from './Circle';
import Button from './Button';
import Line from './Line';
import { useRecoilState } from 'recoil';
import { dataAtom } from '../Recoil';

function Home() {

    const [data, setData] = useRecoilState(dataAtom);
    // { txt: 'Personal Information',
    //   active: false,
    //   completed: false }

    //set current node as active and successors to false
    function activateNode(txt) {
        let found = false;
        const newData = data.map(obj => {
            if (found) return { ...obj, active: false, completed: false };
            else if (obj.txt === txt) {
                found = true;
                return { ...obj, active: true, completed: false };
            }
            else return { ...obj, active: false, completed: true };
        });
        setData(newData);
    }

    //set next node as active and current node to completed
    function nextNode() {
        if(data[data.length-1].completed === true) return;
        let found = false;
        const newData = data.map(obj => {
            if (found) return obj;
            else if (obj.completed === false) {
                if (obj.active) return { ...obj, active: false, completed: true };
                else {
                    found = true;
                    return { ...obj, active: true };
                }
            }
            else return obj;
        });
        setData(newData);
    }

    return (
        <div className='w-full'>
            <div className='flex justify-around my-[100px] mx-[20px]'>
                {data.map((obj, i) => (
                    <React.Fragment key={i}>
                        <Circle index={i} item={obj} handleClick={activateNode} />
                        {((i !== data.length - 1) && <Line key={i} completed={!obj.completed} />)}
                    </React.Fragment>
                ))}
            </div>
            <div className='btnContainer'>
                {data[data.length-1].completed === false && <Button label={'Next'} click={nextNode} />}
            </div>
        </div>
    )
}

export default Home;