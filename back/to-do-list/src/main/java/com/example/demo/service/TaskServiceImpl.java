package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.TaskNotFoundException;
import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public String saveTask(Task task) {

        taskRepository.save(task);
        return "user successfully saved";
    }

    @Override
    public Task updateTask(Task task, Integer taskId) {

        Optional<Task> foundTask = taskRepository.findById(taskId);

        if (foundTask.isPresent()) {
            Task existingTask = foundTask.get();

            existingTask.setTaskName(task.getTaskName());
            existingTask.setTaskDescription(task.getTaskDescription());
            existingTask.setTaskStartDate(task.getTaskStartDate());
            existingTask.setTaskEndDate(task.getTaskEndDate());
            existingTask.setCreatedAt(task.getCreatedAt());

            return taskRepository.save(existingTask);
        } else {
            throw new TaskNotFoundException("Task with ID " + taskId + " not found");
        }

    }

    @Override
    public List<Task> getAllTasks() {
        return (List<Task>) taskRepository.findAll();
    }

    @Override
    public void deleteTask(Integer taskId) {

        Optional<Task> availableTask = taskRepository.findById(taskId);

        if (availableTask.isPresent()) {
            taskRepository.deleteById(taskId);
        } else {
            throw new TaskNotFoundException("Task with ID " + taskId + " not found");
        }

    }

}
