import React from 'react';

const TaskList = () => {
  const tasks = [
    { id: 1, name: 'Complete React project' },
    { id: 2, name: 'Review JavaScript concepts' },
    { id: 3, name: 'Prepare for the interview' }
  ];

  return (
    <div style={FileList}>
      <h3>Task List</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};
const FileList={
  border: '20px solid #ccc',
  padding: '10px',
  borderRadius: '5px',
  margin: '10px',
  maxWidth: '200px',
}
export default TaskList;
