import * as admin from 'firebase-admin';


admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  storageBucket: 'flui-bc3f8.appspot.com'

});

export const firebaseStorage = admin.storage().bucket();