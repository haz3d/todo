import { useState } from 'react';

export default function Home(): JSX.Element {
  const [tasks, setTasks] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
          setInputValue(e.target.value);
            };

              const handleAddTask = (): void => {
                  if (inputValue.trim() !== '') {
                        setTasks([...tasks, inputValue]);
                              setInputValue('');
                                  }
                                    };

                                      const handleRemoveTask = (index: number): void => {
                                          const newTasks = [...tasks];
                                              newTasks.splice(index, 1);
                                                  setTasks(newTasks);
                                                    };

                                                      return (
                                                          <div>
                                                                <h1>To Do List</h1>
                                                                      <input type="text" value={inputValue} onChange={handleInputChange} />
                                                                            <button onClick={handleAddTask}>Add Task</button>
                                                                                  <ul>
                                                                                          {tasks.map((task, index) => (
                                                                                                    <li key={index}>
                                                                                                                {task} <button onClick={() => handleRemoveTask(index)}>Remove</button>
                                                                                                                          </li>
                                                                                                                                  ))}
                                                                                                                                        </ul>
                                                                                                                                            </div>
                                                                                                                                              );
                                                                                                                                              }
                                                                                                                                              