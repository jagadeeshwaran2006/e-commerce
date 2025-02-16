import './App.css';
import ProjectRouter from './component/Router';
import ErrorBoundary from './component/ErrorBoundary';
function App() {
  return (
    <>
      <ErrorBoundary>
       <ProjectRouter/>
       </ErrorBoundary>
       </>
      );
}

export default App;
