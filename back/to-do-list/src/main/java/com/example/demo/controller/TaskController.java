package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Task;
import com.example.demo.service.TaskService;

@RestController
@RequestMapping("/api/task")
public class TaskController {

    @Autowired
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/welcome")
    public String home() {

        return "Welcome to My To Do List!";
    }

    @PostMapping("/save")
    public String saveTask(@RequestBody Task task) {

        return taskService.saveTask(task);
    }

    @GetMapping("/all")
    public List<Task> getAllTasks() {

        return taskService.getAllTasks();
    }

    @PutMapping("/update/{taskId}")
    public String updateTask(@RequestBody Task task, @PathVariable Integer taskId) {

        Task updatedTask = taskService.updateTask(task, taskId);

        if (updatedTask != null) {
            return "task successfully updated";
        } else {
            return "failed to update";
        }

    }

    @DeleteMapping("/delete/{taskId}")
    public void deleteTask(@PathVariable Integer taskId) {

        taskService.deleteTask(taskId);
    }

}
