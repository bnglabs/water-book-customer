import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const getUserValue = async () => {
  const userData = await firestore()
    .collection('users')
    .doc(auth().currentUser.uid)
    .get();

  return userData.data();
};

const getNotificationsFunc = async numbers => {
  const user = await getUserValue();
  const notifications = await firestore()
    .collection('feeds')
    .orderBy('timestamp', 'desc')
    .limit(numbers ? numbers : 50)
    .get();
  let notifs = [];

  let readNotifs = [];
  let unReadNotifs = [];

  
  notifications.forEach(documentSnapshot => {
    notifs.push({
      ...documentSnapshot.data(),
      key: documentSnapshot.id,
    });
  });
  readNotifs = notifs.filter(data => user.notifs.includes(data.key));
  unReadNotifs = notifs.filter(data => !user.notifs.includes(data.key));
  return {readNotifs, unReadNotifs};
};

export default getNotificationsFunc;
