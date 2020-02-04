import React from 'react';

const SideRightContent = () => {
    return (
        <div className='container'>
            <div className="card-img-top"  />
            <div className='border border-dark'>
                режим работы
            </div>
            <div> топ товары</div>
            <div> скидки</div>
            <style jsx={true.toString()}>{`
           .container {
           flex-wrap:wrap;
           display:flex;
           justify-content:space-around;
           }
            .card-img-top {
           background-image: url(https://news.voxball.com/media/article/images/student-god-pitalsya-v-kfc-no-teper-ego-zhdyot-sud.jpg);
           background-size: cover;
           }
                `}
            </style>

        </div>

    )

}
export default SideRightContent;