import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

interface OwnProps {}

type Props = OwnProps;

const FetchedPosts: FunctionComponent<Props> = (props) => {
    const dispatch = useDispatch()


    return (
        <>
            <div>
                <div className="text-center font-bold">
                    FetchedPosts
                </div>
                {/*<button onClick={()=> dispatch(fetchPosts())}>Load </button>*/}
            </div>
        </>


    );
};

export default FetchedPosts;
