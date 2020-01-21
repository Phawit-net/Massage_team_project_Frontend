import { notification, Icon } from 'antd'
import React from 'react'

const successLoginNotification = () => {
  notification.open({
    message: 'Successful',
    description:
      'Enjoy with Shopping',
    icon: <Icon type="check" style={{ color: '#54b600' }} />,
  });
};

const failLoginNotification = (message) => {
  notification.open({
    message: 'Fail',
    description: message,
    icon: <Icon type="close" style={{ color: '#dc4d4d' }} />,
  });
};

export { failLoginNotification, successLoginNotification }