import React from 'react';
import SideRightContent from "./SideRightContent/SideRightContent";

const SideRight = () => {

    return (
        <div>
            <div className=" info border border-gray">
<SideRightContent/>
            </div>


            <style jsx={true.toString()}>{`
            .info{
            display:flex;
            width:80%;
            min-height:450px;
            height:auto;
            border-radius:25px;
            }
      `}

            </style>
        </div>
    )
}
export default SideRight;