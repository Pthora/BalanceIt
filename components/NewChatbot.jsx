import ChatBot from 'react-simple-chatbot';
import MainNavigator from '../navigation/MainNavigator';

const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    options: [
      { value: 1, label: 'Number 1', trigger: '2' },
      { value: 2, label: 'Number 2', trigger: '3' },
      { value: 3, label: 'Number 3', trigger: '4' },
    ],
  },
  {
    id: '2',
    message: 'Bye!',
    end: true,
  },
  {
    id: '3',
    message: 'Bye Bye!',
    end: true,
  },
  {
    id: '4',
    component: <MainNavigator/>,
    end: true,
  }
];

function NewChatApp() {
    return (
        <div>
        <ChatBot steps={steps} />
      </div>
    );
  }
  
export default NewChatApp;