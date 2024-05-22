import Toast from 'react-native-toast-message';

export const ToastMessage = (type, position = 'bottom', message) => {
  Toast.show({
    type: type, //'success | error | info'
    position: position,
    text2: message,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 40,
    bottomOffset: 40,

    onShow: () => {},
    onHide: () => {},
    onPress: () => {},
  });
};
