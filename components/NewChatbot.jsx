import ChatBot from 'react-simple-chatbot';
import MainNavigator from '../navigation/MainNavigator';

const steps = [
  {
    id: '0',
    message: 'Welcome to BalanceIt!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'How are you feeling today?',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: '3'
  },
  {
    id: '3',
    message: "I am glad you are feeling good!!",
    trigger: '4'
  }
  ,
  {
    id: '4',
    user: true,
    trigger: '5'
  },
  {
    id: '5',
    message: "Bye Bye",
    end: true,
  },
];

function NewChatApp() {
    return (
        <div>
        <ChatBot steps={steps} />
      </div>
    );
  }
  
export default NewChatApp;