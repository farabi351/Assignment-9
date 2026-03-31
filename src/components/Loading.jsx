import React, { Suspense } from 'react';
import cat from "../assets/cat.jpg";

const Loading = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <img src={cat} alt="Loading..." className="w-24 h-24 rounded-full animate-spin" />
            <span className="loading loading-ring loading-xl"></span>

            <Suspense>

                <span className="loading loading-ring loading-xl"></span>

                 <img src={cat} alt="Loading..." className="w-24 h-24 rounded-full animate-spin" />

            </Suspense>
        </div>
    );
};

export default Loading;