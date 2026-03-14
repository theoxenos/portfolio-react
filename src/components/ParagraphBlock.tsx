import * as React from 'react';

const ParagraphBlock = ({children} : {children: React.ReactNode}) => {
    const cssClassList = [
        'my-3',
        'p-3',
        'text-white',
        'border-1',
        'border-black',
        'rounded-2',
        'shadow',
        'bg-nord-2'
    ];
    
    return (
        <div className={cssClassList.join(' ')}>
            {children}
        </div>
    );
};

export default ParagraphBlock;