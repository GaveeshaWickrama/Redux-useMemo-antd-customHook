import './App.css'
import { AddTask } from './features/task/AddTaskView'
import { TaskView } from './features/task/TaskView'
import { Layout, Typography } from 'antd';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  
  return (
    <Layout style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Header>
        <Title style={{ color: 'white' }}>Task Manager</Title>
      </Header>
      <Content style={{ marginTop: '20px' }}>
        <AddTask />
        <TaskView />
      </Content>
    </Layout>
  )
}

export default App
