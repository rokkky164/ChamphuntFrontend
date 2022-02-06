import { Tooltip } from 'carbon-components-react';
import { useEffect, useState } from 'react';

const Notification = ( { notifications }) => {
    const todayNotificationsCount = localStorage.getItem('todayNotificationCount');
    return <Tooltip
        direction='bottom'
    >
        <div className="caret"></div>
        <div className='notification-content'>
            <div className='heading'>
                <p className='title' >Notifications</p>
                <p className='sub-title'>You have {todayNotificationsCount}  notification today</p>
            </div>
            <div className='notifications'>
                { notifications.map( (notification,index) => {
                    const { label, items } = notification;
                    
                    return <div key={index} className='notification-week'>
                        <p className='label'>
                            {label}
                        </p>
                        <div className='items'>
                            { items.map((item,innerIndex) => {

                                const { avatar , content, time, postimg } = item;
                                
                                return <div key={innerIndex} className='item'>
                                    <div className='left-ntf'>
                                        <div className='avatar-block'>
                                            <img src={avatar} alt='' />
                                        </div>
                                        <div className='item-cnt'>
                                            <p className='text-cnt'>
                                                {content}
                                            </p>
                                            <p className='time-cnt'>
                                                {time}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='right-ntf'>
                                        <div className='post-img-block'>
                                            <img src={postimg} alt='' />
                                        </div>
                                    </div>
                                </div>
                            }) }
                        </div>
                    </div>
                } ) }
            </div>
        </div>
    </Tooltip>
};

export default Notification;