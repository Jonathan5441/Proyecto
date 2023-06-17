import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkRfokiX1qjV6nRbaoBYqEye_vm4F_vLY",
  authDomain: "edgarburguer-22397.firebaseapp.com",
  projectId: "edgarburguer-22397",
  storageBucket: "edgarburguer-22397.appspot.com",
  messagingSenderId: "800072944960",
  appId: "1:800072944960:web:dab7d47d4ed74a34c03ea5"
};

export const initFirebase = initializeApp(firebaseConfig);