while (eventLoop.waitForTask()) {
    const taskQueue = eventLoop.selectTaskQueue();
    if (taskQueue.hasTask()) {
        eventLoop.processNextTask();
    }
    const microTaskQueue = eventLoop.selectMicroTaskQueue();
    // All microtasks get process as soon as the call stack is empty
    // Микрозадачи могут быть одиночные и составные
    while (microTaskQueue.hasTask()) {
        eventLoop.processNextMicroTasks();
    }

    if (eventLoop.shouldRender()) {
        eventLoop.render();
    }
}

// После обработки задачи из очереди задач и обработки всех микрозадач из очереди микрозадач, браузер решает нужно ли ему что-то отрендерить

// Есть 2 событийных цикла - для контекста страниц и для веб-воркеров (не занимается отрисовкой страниц, функционал СЦ для воркеров - ограничен)