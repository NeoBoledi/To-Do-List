package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Task;

public interface TaskService {

    Task saveTask(Task task);

    Task updateTask(Task task, Integer id);

    List<Task> getAllTasks();

    void deleteTask(Integer id);
}
